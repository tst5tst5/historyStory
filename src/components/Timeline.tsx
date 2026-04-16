import { useMemo, useState, useCallback, useRef, useEffect } from 'react'
import { useRegion } from '../context/RegionContext'
import { useTheme } from '../context/ThemeContext'
import { useCategories } from '../context/CategoryContext'
import { events } from '../data/events'
import { allDynasties } from '../data/dynasties'
import { eventCategories } from '../data/categories'
import { continents } from '../data/continents'
import { Bookmark, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'

const BOOKMARKS_KEY = 'history_bookmarks'
function getBookmarks(): string[] {
  const saved = localStorage.getItem(BOOKMARKS_KEY)
  return saved ? JSON.parse(saved) : []
}
function saveBookmarks(ids: string[]) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(ids))
}

const getContrastText = (hexColor: string): string => {
  // 根据背景色亮度返回高对比度文字色（亮底→深字，暗底→白字）
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.52 ? '#1a1a1a' : '#ffffff'
}

const getCountryColor = (countryId: string): string => {
  const colors = [
    '#DC143C', '#4169E1', '#228B22', '#FF8C00', '#9370DB',
    '#20B2AA', '#FF6347', '#4169E1', '#32CD32', '#FFD700',
    '#FF69B4', '#00CED1', '#FF4500', '#6B8E23', '#8B4513',
  ]
  const hash = countryId.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
  return colors[hash % colors.length]
}

const ZOOM_LEVELS = { min: 0.15, default: 1, max: 5 }

export default function Timeline() {
  const { getSelectedCountryIds, selectedRegions } = useRegion()
  const { isDark } = useTheme()
  const { selectedCategories } = useCategories()

  // === Scroll / Drag refs ===
  const rightContainerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const dragScrollStart = useRef({ left: 0, top: 0 })

  const [zoom, setZoom] = useState(1)
  const [bookmarkIds, setBookmarkIds] = useState<string[]>(getBookmarks)
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)
  const [hoverPosition, setHoverPosition] = useState({ pageX: 0, pageY: 0 })
  const [showDetail, setShowDetail] = useState<any>(null)
  const [hoveredDynastyId, setHoveredDynastyId] = useState<string | null>(null)
  const [dynastyHoverPos, setDynastyHoverPos] = useState({ pageX: 0, pageY: 0 })
  const [isMouseOnBand, setIsMouseOnBand] = useState(false)

  // === Country row vertical drag-reorder state ===
  const [countryDragId, setCountryDragId] = useState<string | null>(null)
  const [countryDragStartY, setCountryDragStartY] = useState(0)
  const [countryDragCurrentY, setCountryDragCurrentY] = useState(0)
  const [customCountryOrder, setCustomCountryOrder] = useState<Record<string, number>>(() => {
    try { return JSON.parse(localStorage.getItem('timeline-country-order') || '{}') } catch { return {} }
  })

  // === Sync left column scroll with right container ===
  useEffect(() => {
    const rc = rightContainerRef.current
    const lc = leftColRef.current
    if (!rc || !lc) return
    const onScroll = () => { lc.scrollTop = rc.scrollTop }
    rc.addEventListener('scroll', onScroll)
    return () => rc.removeEventListener('scroll', onScroll)
  })

  // === Drag handlers (both directions) ===
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    if (!rightContainerRef.current) return
    isDragging.current = true
    dragStart.current = { x: e.pageX, y: e.pageY }
    dragScrollStart.current = {
      left: rightContainerRef.current.scrollLeft,
      top: rightContainerRef.current.scrollTop,
    }
    rightContainerRef.current.style.cursor = 'grabbing'
    rightContainerRef.current.style.userSelect = 'none'
  }, [])

  const handleDragMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !rightContainerRef.current) return
    e.preventDefault()
    const dx = (e.pageX - dragStart.current.x) * 1.5
    const dy = (e.pageY - dragStart.current.y) * 1.2
    rightContainerRef.current.scrollLeft = dragScrollStart.current.left - dx
    rightContainerRef.current.scrollTop = dragScrollStart.current.top - dy
  }, [])

  const handleDragEnd = useCallback(() => {
    if (!rightContainerRef.current) return
    isDragging.current = false
    rightContainerRef.current.style.cursor = 'grab'
    rightContainerRef.current.style.userSelect = ''
  }, [])

  // === Wheel: on band → zoom only; off band → native vertical scroll ===
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (isMouseOnBand) {
      // On band: ALWAYS prevent default (no vertical scroll), only zoom
      e.preventDefault()
      const container = rightContainerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left + container.scrollLeft
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      const newZoom = Math.max(ZOOM_LEVELS.min, Math.min(ZOOM_LEVELS.max, zoom + delta))
      const timeAtMouse = timeRange.min + mouseX / yearWidth
      const baseYearWidth = 2
      const newYearWidth = baseYearWidth * newZoom
      const newMouseX = (timeAtMouse - timeRange.min) * newYearWidth
      const newScrollLeft = newMouseX - (e.clientX - rect.left)
      setZoom(newZoom)
      requestAnimationFrame(() => {
        if (container) container.scrollLeft = Math.max(0, newScrollLeft)
      })
    }
    // Off band: do NOT call preventDefault → browser naturally scrolls vertically
  }, [isMouseOnBand, zoom])

  const resetZoom = useCallback(() => {
    setZoom(1)
    if (rightContainerRef.current) rightContainerRef.current.scrollLeft = 0
  }, [])

  const isBookmarked = useCallback((id: string) => bookmarkIds.includes(id), [bookmarkIds])
  const toggleBookmark = useCallback((id: string) => {
    setBookmarkIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      saveBookmarks(next)
      return next
    })
  }, [])
  const handleEventHover = useCallback((eventId: string, e: React.MouseEvent) => {
    setHoveredEvent(eventId)
    setHoverPosition({ pageX: e.pageX, pageY: e.pageY })
  }, [])
  const handleEventLeave = useCallback(() => {
    // 鼠标离开事件，立即隐藏弹窗
    setHoveredEvent(null)
  }, [])
  const handleEventClick = useCallback((event: any) => setShowDetail(event), [])

  const formatYear = (y: number) => y < 0 ? `公元前${Math.abs(y)}年` : `${y}年`
  const formatYearShort = (y: number) => y < 0 ? `${Math.abs(y)}BC` : `${y}`
  const getCategory = (cid: string) => eventCategories.find((c) => c.id === cid)

  // === Computed data ===
  // 从continents主数据构建国家ID→isDefunct映射（确保即使localStorage旧数据也能正确标记）
  const continentCountryMap = useMemo(() => {
    const map = new Map<string, { isDefunct?: boolean }>()
    continents.forEach((cont) => {
      cont.countries.forEach((c) => map.set(c.id, { isDefunct: c.isDefunct }))
    })
    return map
  }, [])

  const selectedCountries = useMemo(() => {
    const countryIds = getSelectedCountryIds()
    const result: { id: string; name: string; color: string; isDefunct?: boolean }[] = []
    selectedRegions.forEach((region) => {
      region.countries.forEach((country) => {
        if (countryIds.includes(country.countryId)) {
          // 优先使用localStorage中的isDefunct，否则从continents主数据回填
          const sourceData = continentCountryMap.get(country.countryId)
          result.push({
            id: country.countryId,
            name: country.countryName,
            color: getCountryColor(country.countryId),
            isDefunct: country.isDefunct ?? sourceData?.isDefunct,
          })
        }
      })
    })
    return result
  }, [selectedRegions, getSelectedCountryIds, continentCountryMap])

  // === Country row drag-reorder ===
  // 按自定义排序顺序排列的国家列表
  const orderedCountries = useMemo(() => {
    return [...selectedCountries].sort((a, b) => {
      const orderA = customCountryOrder[a.id] ?? Infinity
      const orderB = customCountryOrder[b.id] ?? Infinity
      return orderA - orderB
    })
  }, [selectedCountries, customCountryOrder])

  const handleCountryDragStart = useCallback((countryId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCountryDragId(countryId)
    setCountryDragStartY(e.pageY)
    setCountryDragCurrentY(0)
  }, [])

  const handleCountryDragMove = useCallback((e: React.MouseEvent) => {
    if (!countryDragId) return
    setCountryDragCurrentY(e.pageY - countryDragStartY)
  }, [countryDragId, countryDragStartY])

  const handleCountryDragEnd = useCallback(() => {
    if (!countryDragId) return
    // 根据当前偏移量计算新的排序位置
    const currentIdx = orderedCountries.findIndex(c => c.id === countryDragId)
    if (currentIdx < 0) { setCountryDragId(null); return }

    // 计算目标位置：每移动约 totalHeight/2 算一行
    const avgHeight = 100 // 近似每行高度
    const offsetRows = Math.round(countryDragCurrentY / avgHeight)
    let newIdx = Math.max(0, Math.min(orderedCountries.length - 1, currentIdx + offsetRows))

    if (newIdx !== currentIdx) {
      // 更新顺序
      const newOrder = { ...customCountryOrder }
      orderedCountries.forEach((c, i) => {
        if (i === newIdx) newOrder[countryDragId] = i
        else if (i < newIdx && c.id !== countryDragId && (customCountryOrder[c.id] ?? i) >= newOrder[countryDragId]) newOrder[c.id] = (customCountryOrder[c.id] ?? i) + 1
        else if (i > newIdx && c.id !== countryDragId && (customCountryOrder[c.id] ?? i) <= newOrder[countryDragId]) newOrder[c.id] = (customCountryOrder[c.id] ?? i) - 1
        else if (c.id !== countryDragId && !(customCountryOrder[c.id] != null)) newOrder[c.id] = i > newIdx ? i + 1 : i
      })
      setCustomCountryOrder(newOrder)
      try { localStorage.setItem('timeline-country-order', JSON.stringify(newOrder)) } catch {}
    }

    // 拖拽结束后缩放到25%
    setZoom(0.25)

    setCountryDragId(null)
    setCountryDragCurrentY(0)
  }, [countryDragId, countryDragCurrentY, orderedCountries, customCountryOrder, setZoom])

  const filteredEvents = useMemo(() => {
    const countryIds = new Set(selectedCountries.map((c) => c.id))
    return events.filter(
      (e) => countryIds.has(e.countryId) && selectedCategories.has(e.categoryId),
    )
  }, [selectedCountries, selectedCategories])

  const timeRange = useMemo(() => {
    if (filteredEvents.length === 0 && selectedCountries.length === 0) return { min: -3000, max: 2000 }
    const years = filteredEvents.map((e) => e.year)
    const dynastyYears: number[] = []
    selectedCountries.forEach((country) => {
      const cds = allDynasties.filter((d) => d.countryId === country.id)
      cds.forEach((d) => { dynastyYears.push(d.startYear, d.endYear) })
    })
    const allYears = [...years, ...dynastyYears]
    const min = allYears.length > 0 ? Math.min(...allYears) : -3000
    const max = allYears.length > 0 ? Math.max(...allYears) : 2000
    return {
      min: Math.floor(min * 0.95 / 100) * 100 - 100,
      max: Math.ceil(max * 1.05 / 100) * 100 + 100,
    }
  }, [filteredEvents, selectedCountries])

  const baseYearWidth = 2
  const yearWidth = baseYearWidth * zoom
  const timelineWidth = Math.abs(timeRange.max - timeRange.min) * yearWidth
  const getEventPosition = (year: number) => (year - timeRange.min) * yearWidth
  const getCountryDynasties = (cid: string) => allDynasties.filter((d) => d.countryId === cid)

  // Layout constants
  const bandHeight = 28
  const labelRowHeight = 26
  const extraGap = 12
  const eventDotSize = 7
  const dotToLabelGap = 8
  const frozenColWidth = 115

  // Visibility thresholds
  const showTimeLabels = zoom >= 0.15
  const showDynastyNames = zoom >= 0.25
  const showEventLabels = zoom >= 0.35
  const showFullEventLabels = zoom >= 0.6
  const dynastyMinDisplayWidth = Math.max(30, 50 / zoom)
  const dynastyRepeatInterval = Math.max(80, 140 / zoom)
  const maxLabelRows = zoom < 0.5 ? 14 : zoom < 0.8 ? 10 : zoom < 1.2 ? 8 : 6

  // Compute dynasty label positions
  const computeDynastyLabelPositions = useCallback((dynasties: any[]) => {
    const positions: { dynasty: any; x: number; label: string; show: boolean }[] = []
    dynasties.forEach((dynasty) => {
      const startX = Math.max(0, getEventPosition(dynasty.startYear))
      const endX = getEventPosition(dynasty.endYear)
      const width = endX - startX
      const canShow = showDynastyNames && width > dynastyMinDisplayWidth
      if (!canShow || !showDynastyNames) {
        positions.push({ dynasty, x: startX, label: dynasty.name, show: false })
        return
      }
      const nameWidth = dynasty.name.length * (zoom < 0.5 ? 7 : 8) + 12
      const padding = 8
      const availableWidth = width - padding * 2
      if (availableWidth < nameWidth + 5) {
        positions.push({ dynasty, x: startX + padding + availableWidth / 2, label: dynasty.name, show: true })
        return
      }
      const displayCount = Math.max(
        availableWidth > dynastyRepeatInterval * 1.3 ? 2 : 1,
        Math.min(Math.floor(availableWidth / dynastyRepeatInterval), 6),
      )
      for (let i = 0; i < displayCount; i++) {
        const ratio = displayCount === 1 ? 0.5 : i / (displayCount - 1)
        positions.push({ dynasty, x: startX + padding + availableWidth * ratio, label: dynasty.name, show: true })
      }
    })
    return positions
  }, [getEventPosition, showDynastyNames, dynastyMinDisplayWidth, dynastyRepeatInterval])

  // Compute event layouts
  const computeEventLayouts = useCallback((countryEvents: any[]) => {
    if (!showEventLabels || countryEvents.length === 0) return []
    const layouts: { event: any; x: number; row: number }[] = []
    const rows: number[][] = []
    const sortedEvents = [...countryEvents].sort((a, b) => a.year - b.year)
    const estW = Math.max(140, 160 * (zoom > 1 ? zoom / 2 : 1))
    sortedEvents.forEach((event) => {
      const x = getEventPosition(event.year)
      let assignedRow = 0
      for (let r = 0; r < maxLabelRows; r++) {
        if (!rows[r]) rows[r] = []
        let conflict = false
        for (const ox of rows[r]) {
          if (Math.abs(x - ox) < estW * 0.9) { conflict = true; break }
        }
        if (!conflict) { assignedRow = r; rows[r].push(x); break }
        assignedRow = r + 1
      }
      assignedRow = Math.min(assignedRow, maxLabelRows - 1)
      while (rows.length <= assignedRow) rows.push([])
      if (!rows[assignedRow].includes(x)) rows[assignedRow].push(x)
      layouts.push({ event, x, row: assignedRow })
    })
    return layouts
  }, [getEventPosition, showEventLabels, maxLabelRows])

  // Country layouts map
  const countryLayoutsMap = useMemo(() => {
    const map: Record<string, {
      dynastyPositions: ReturnType<typeof computeDynastyLabelPositions>
      eventLayouts: ReturnType<typeof computeEventLayouts>
      labelAreaHeight: number
      totalHeight: number
    }> = {}
    selectedCountries.forEach((country) => {
      const dps = computeDynastyLabelPositions(getCountryDynasties(country.id))
      const els = computeEventLayouts(filteredEvents.filter((e) => e.countryId === country.id))
      let lah = 0
      if (showEventLabels && els.length > 0) {
        const usedRows = new Set(els.map((l) => l.row))
        lah = (usedRows.size > 0 ? Math.max(...usedRows) + 1 : 1) * labelRowHeight + 4
      }
      const eda = filteredEvents.filter((e) => e.countryId === country.id).length > 0 ? eventDotSize + dotToLabelGap + 4 : 0
      const th = bandHeight + eda + lah + extraGap
      map[country.id] = { dynastyPositions: dps, eventLayouts: els, labelAreaHeight: lah, totalHeight: th }
    })
    return map
  }, [selectedCountries, filteredEvents, computeDynastyLabelPositions, computeEventLayouts, showEventLabels])

  /* ==================== RENDER ==================== */
  return (
    <div className="relative flex h-full">
      {/* ===== Left frozen column (no independent scroll, synced with right) ===== */}
      <div
        ref={leftColRef}
        className={`flex-shrink-0 overflow-y-hidden overflow-x-hidden border-r border-gold-400/10 ${
          isDark ? 'bg-gradient-to-b from-dark-200 to-dark-300' : 'bg-gradient-to-b from-parchment-200 to-parchment-300'
        }`}
        style={{ width: frozenColWidth }}
        onMouseMove={handleCountryDragMove}
        onMouseUp={handleCountryDragEnd}
        onMouseLeave={() => { if (countryDragId) handleCountryDragEnd() }}
      >
        {/* Zoom controls — absolute overlay, doesn't affect flow layout */}
        <div className={`absolute top-0 right-0 z-20 m-2 flex items-center gap-1 p-1 rounded-lg transition-opacity duration-200 ${isDark ? 'bg-dark-100/50 hover:bg-dark-100/95' : 'bg-white/40 hover:bg-white/95'} border border-gold-400/20 backdrop-blur-sm`}>
          <button onClick={() => setZoom((z) => Math.max(ZOOM_LEVELS.min, z - 0.2))} className={`p-1.5 rounded ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`} title="缩小">
            <ZoomOut className="w-3.5 h-3.5 text-gold-400" />
          </button>
          <span className={`text-[10px] px-1.5 font-mono ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(ZOOM_LEVELS.max, z + 0.2))} className={`p-1.5 rounded ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`} title="放大">
            <ZoomIn className="w-3.5 h-3.5 text-gold-400" />
          </button>
          <button onClick={resetZoom} className={`p-1.5 rounded ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`} title="重置缩放">
            <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

        {/* Time ruler placeholder (matches right side ruler height) */}
        <div className="h-8 border-b border-gold-400/20" />

        {/* Country name rows — vertically align with band area, supports drag-reorder */}
        {orderedCountries.map((country, visualIndex) => {
          const layout = countryLayoutsMap[country.id]
          if (!layout) return null
          const isDragging = countryDragId === country.id
          return (
            <div
              key={country.id}
              className="relative"
              style={{
                height: layout.totalHeight,
                transform: isDragging ? `translateY(${countryDragCurrentY}px)` : undefined,
                opacity: isDragging ? 0.6 : 1,
                zIndex: isDragging ? 50 : 1,
                transition: isDragging ? 'none' : 'transform 0.15s ease, opacity 0.15s ease',
                // 拖拽时的插入指示线
                borderTop: (countryDragId && !isDragging && visualIndex > 0 && orderedCountries[visualIndex - 1]?.id === countryDragId)
                  ? '2px solid #D4AF37'
                  : undefined,
              }}
            >
              {/* Country name label — aligned to match band vertical position */}
              <div
                className="absolute inset-x-0 top-0 flex items-center justify-center"
                style={{ height: bandHeight }}
              >
                <span
                  className={`px-3 py-0.5 rounded text-xs font-medium whitespace-nowrap cursor-grab active:cursor-grabbing select-none ${
                    isDark ? 'bg-dark-200/95 text-parchment-100' : 'bg-white/95 text-dark-100'
                  } border border-gold-400/30 shadow-lg hover:border-gold-400/60 transition-colors`}
                  style={{ height: 24, display: 'flex', alignItems: 'center' }}
                  onMouseDown={(e) => handleCountryDragStart(country.id, e)}
                  title="上下拖动调整顺序"
                >
                  {country.name}{country.isDefunct && <span className="ml-0.5 text-[10px] opacity-70" title="已灭亡">（-）</span>}
                </span>
              </div>
            </div>
          )
        })}

        {/* Bottom info bar — absolute overlay */}
        <div className={`absolute bottom-0 left-0 right-0 z-20 h-7 flex items-center justify-center px-2 text-[9px] ${
          isDark ? 'bg-dark-100/80 text-gray-500' : 'bg-parchment-100/80 text-gray-400'
        } border-t border-gold-400/10`}>
          共 {filteredEvents.length} 个事件 · {orderedCountries.length} 个国家
        </div>
      </div>

      {/* ===== Right scrollable area (handles ALL scrolling) ===== */}
      <div
        ref={rightContainerRef}
        className={`flex-1 overflow-auto cursor-grab active:cursor-grabbing ${
          isDark ? 'bg-gradient-to-b from-dark-200 to-dark-300' : 'bg-gradient-to-b from-parchment-200 to-parchment-300'
        }`}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onWheel={handleWheel}
      >
        <div className="relative" style={{ width: Math.max(timelineWidth + 200, 2000), minHeight: '100%' }}>

          {/* Time ruler */}
          <div className="sticky top-0 z-10 h-8 bg-inherit border-b border-gold-400/20">
            <div className="relative h-full">
              {(() => {
                let step = 500
                if (zoom >= 2) step = 50
                else if (zoom >= 1) step = 100
                else if (zoom >= 0.5) step = 200
                else if (zoom >= 0.25) step = 500
                else step = 1000
                const count = Math.ceil((timeRange.max - timeRange.min) / step) + 1
                return Array.from({ length: count }).map((_, i) => {
                  const year = timeRange.min + i * step
                  if (year > timeRange.max) return null
                  const x = (year - timeRange.min) * yearWidth
                  return (
                    <div key={`tick-${year}-${step}`} className="absolute top-0 h-full flex flex-col justify-center" style={{ left: x }}>
                      <div className={`w-px h-2 ${isDark ? 'bg-gold-400/50' : 'bg-gold-600/50'}`} />
                      {showTimeLabels && (
                        <span
                          className={`absolute top-2 -translate-x-1/2 whitespace-nowrap font-mono ${
                            isDark ? 'text-gold-400/80' : 'text-gold-600/80'
                          }`}
                          style={{ fontSize: zoom < 0.25 ? 9 : zoom < 0.4 ? 10 : zoom < 0.6 ? 11 : 12 }}
                        >
                          {formatYearShort(year)}
                        </span>
                      )}
                    </div>
                  )
                })
              })()}
            </div>
          </div>

          {/* Country rows */}
          {orderedCountries.map((country) => {
            const cDynasties = getCountryDynasties(country.id)
            const cEvents = filteredEvents.filter((e) => e.countryId === country.id)
            const layout = countryLayoutsMap[country.id]
            if (!layout) return null
            const { dynastyPositions, eventLayouts, labelAreaHeight, totalHeight } = layout

            return (
              <div
                key={country.id}
                className="relative"
                style={{
                  height: totalHeight,
                  transform: countryDragId === country.id ? `translateY(${countryDragCurrentY}px)` : undefined,
                  opacity: countryDragId === country.id ? 0.6 : 1,
                  zIndex: countryDragId === country.id ? 50 : 1,
                  transition: countryDragId === country.id ? 'none' : 'transform 0.15s ease, opacity 0.15s ease',
                }}
              >

                {/* Band area container */}
                <div
                  className="absolute"
                  style={{ top: 0, left: 0, width: '100%', height: bandHeight }}
                  onMouseEnter={() => setIsMouseOnBand(true)}
                  onMouseLeave={() => setIsMouseOnBand(false)}
                  data-band-area="true"
                >
                  {/* 上边界细线 — 延伸到最左侧，辅助对应国家名称 */}
                  <div className={`absolute left-0 right-0 top-0 h-px ${isDark ? 'bg-gold-400/25' : 'bg-gold-600/20'}`} />

                  {/* 下边界细线 */}
                  <div className={`absolute left-0 right-0 bottom-0 h-px ${isDark ? 'bg-gold-400/25' : 'bg-gold-600/20'}`} />

                  {/* Dynasty bands */}
                  {cDynasties.map((dynasty) => {
                    const sx = Math.max(0, getEventPosition(dynasty.startYear))
                    const ex = getEventPosition(dynasty.endYear)
                    const w = ex - sx
                    const bgOp = isDark ? 0.6 : 0.45
                    const bg = dynasty.color
                    const isDyHov = hoveredDynastyId === dynasty.id
                    const finalOpacity = isDyHov ? (isDark ? 0.85 : 0.70) : bgOp

                    return (
                      <div
                        key={dynasty.id}
                        className="absolute top-0 h-full rounded transition-all duration-300 ease-out"
                        style={{
                          left: sx,
                          width: Math.max(w, 2),
                          backgroundColor: `${bg}${Math.round(finalOpacity * 255).toString(16).padStart(2, '0')}`,
                          borderLeft: `2.5px solid ${bg}`,
                          borderRadius: isDyHov ? '4px' : '2px',
                          boxShadow: isDyHov
                            ? `0 4px 20px ${bg}80, 0 0 40px ${bg}20`
                            : `0 1px 4px ${bg}30`,
                        }}
                        onMouseEnter={(e) => { setHoveredDynastyId(dynasty.id); setDynastyHoverPos({ pageX: e.pageX, pageY: e.pageY }) }}
                        onMouseMove={(e) => setDynastyHoverPos({ pageX: e.pageX, pageY: e.pageY })}
                        onMouseLeave={() => setHoveredDynastyId(null)}
                      >

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div
                            className={`absolute inset-y-0 w-16 transition-opacity duration-300 ${isDyHov ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                              background: `linear-gradient(90deg, transparent, ${bg}50, ${bg}80, ${bg}50, transparent)`,
                              animation: isDyHov ? 'shimmer 1.8s ease-in-out infinite' : undefined,
                              filter: 'blur(6px)',
                            }}
                          />
                        </div>

                        {/* Sparkle particles */}
                        {isDyHov && (
                          <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <div
                                key={`pt-${i}`}
                                className="absolute w-0.5 h-0.5 rounded-full"
                                style={{
                                  background: '#fff',
                                  left: `${10 + i * 18}%`,
                                  top: `${25 + (i * 11) % 50}%`,
                                  opacity: 0,
                                  boxShadow: `0 0 3px #fff, 0 0 6px ${bg}`,
                                  animation: `sparkle ${0.8 + (i * 0.17)}s ease-in-out infinite`,
                                  animationDelay: `${i * 0.15}s`,
                                }}
                              />
                            ))}
                          </div>
                        )}

                        {/* Top highlight gradient */}
                        <div className="absolute left-0 right-0 transition-opacity duration-300 pointer-events-none" style={{
                          top: 0, height: '35%',
                          background: `linear-gradient(180deg, rgba(255,255,255,${isDyHov ? (isDark ? '0.18' : '0.28') : (isDark ? '0.06' : '0.12')}), transparent)`,
                          borderRadius: '3px 3px 0 0',
                        }} />

                        {/* Bottom glow line */}
                        <div className="absolute left-0 right-0 transition-all duration-300 pointer-events-none" style={{
                          bottom: 0, height: isDyHov ? 2 : 1,
                          background: `linear-gradient(90deg, transparent, ${bg}, transparent)`,
                          opacity: isDyHov ? 1 : 0.4,
                          boxShadow: isDyHov ? `0 0 8px ${bg}` : 'none',
                        }} />

                        {/* Dynasty name label — 垂直居中，左右按时间分布，不遮挡 */}
                        <div className="relative z-10 absolute inset-x-0 top-0 h-full overflow-visible pointer-events-none">
                          {dynastyPositions
                            .filter((p) => p.dynasty.id === dynasty.id && p.show)
                            .map((pos, idx) => {
                              const lo = pos.x - sx
                              const nw = dynasty.name.length * (isDyHov ? 10 : 9) + 16
                              const clampedL = Math.max(nw / 2 + 4, Math.min(w - nw / 2 - 4, lo))
                              return (
                                <span
                                  key={`dn-${dynasty.id}-${idx}`}
                                  className={`absolute px-1 whitespace-nowrap transition-all duration-300 ${isDyHov ? 'text-[12px] font-bold' : 'text-[10px] font-semibold'}`}
                                  style={{
                                    left: clampedL,
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: getContrastText(bg),
                                    textShadow: isDyHov
                                      ? `0 0 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)`
                                      : (isDark ? '0 1px 3px rgba(0,0,0,0.7)' : '0 1px 2px rgba(255,255,255,0.4)'),
                                    letterSpacing: isDyHov ? '1.5px' : '0',
                                  }}
                                >
                                  {pos.label}
                                </span>
                              )
                            })}
                        </div>

                        {/* Dynasty hover tooltip — 显示在色带下方，可交互 */}
                        {isDyHov && (
                          <div className="fixed z-[1002]" style={{
                            left: Math.min(dynastyHoverPos.pageX + 12, window.innerWidth - 220),
                            top: dynastyHoverPos.pageY + 18,
                          }}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={() => setHoveredDynastyId(dynasty.id)}
                          onMouseLeave={() => setHoveredDynastyId(null)}>
                            <div className="px-2.5 py-1.5 rounded-lg shadow-xl border text-xs whitespace-nowrap backdrop-blur-md transition-opacity duration-150" style={{
                              backgroundColor: isDark ? '#1a1a2eee' : '#ffffffee',
                              borderColor: bg + '70',
                              color: isDark ? '#F5F5DC' : '#1a1a1a',
                            }}>
                              <span className="font-bold" style={{ color: bg }}>{dynasty.name}</span>
                              <span className="ml-1.5 opacity-55">{formatYear(dynasty.startYear)} — {formatYear(dynasty.endYear)}</span>
                              <div className="text-[10px] mt-0.5 opacity-45">持续 {dynasty.endYear - dynasty.startYear} 年</div>
                              <div className="mt-1.5 pt-1 border-t" style={{ borderColor: bg + '25' }}>
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: bg }} />
                                  <span className="text-[10px] opacity-65">{country.name}{country.isDefunct ? '（-）' : ''}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    )
                  })}

                  {/* Event dots */}
                  {cEvents.map((evt) => {
                    const ex = getEventPosition(evt.year)
                    const cat = getCategory(evt.categoryId)
                    const evtHov = hoveredEvent === evt.id
                    const bk = isBookmarked(evt.id)
                    const dsz = zoom < 0.4 ? 4 : zoom < 0.7 ? 5 : eventDotSize
                    return (
                      <div
                        key={evt.id}
                        className="absolute cursor-pointer transition-transform duration-150"
                        style={{ left: ex, top: bandHeight + 2, transform: `translate(-50%, 0) ${evtHov ? 'scale(1.5)' : 'scale(1)'}`, zIndex: evtHov ? 100 : 15 }}
                        onMouseEnter={(e) => handleEventHover(evt.id, e)}
                        onMouseLeave={handleEventLeave}
                        onClick={() => handleEventClick(evt)}
                      >
                        <div className={`rounded-full shadow-sm ${bk ? 'ring-2 ring-offset-0.5 ring-yellow-400' : ''}`} style={{ width: dsz, height: dsz, backgroundColor: cat?.color || '#888', boxShadow: evtHov ? `0 0 10px ${cat?.color}` : `0 0 3px ${cat?.color}60` }} />
                      </div>
                    )
                  })}
                </div>

                {/* Event labels area */}
                {showEventLabels && eventLayouts.length > 0 && labelAreaHeight > 0 && (
                  <div className="absolute" style={{ top: bandHeight + eventDotSize + dotToLabelGap + 2, left: 0, width: '100%', height: labelAreaHeight }}>
                    {cDynasties.map((dynasty) => (
                      <div key={`ln-${dynasty.id}`} className="absolute top-0 bottom-0 w-px" style={{ left: getEventPosition(dynasty.startYear), backgroundColor: dynasty.color + '25' }} />
                    ))}
                    {eventLayouts.map(({ event, x, row }) => {
                      const cat = getCategory(event.categoryId)
                      const evtHov = hoveredEvent === event.id
                      const bk = isBookmarked(event.id)
                      return (
                        <div
                          key={event.id}
                          className="absolute cursor-pointer transition-all duration-150"
                          style={{ left: x, top: row * labelRowHeight + 2, transform: `translate(-50%, 0) ${evtHov ? 'scale(1.05)' : 'scale(1)'}`, zIndex: evtHov ? 100 : 5 }}
                          onMouseEnter={(e) => handleEventHover(event.id, e)}
                          onMouseLeave={handleEventLeave}
                          onClick={() => handleEventClick(event)}
                        >
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-[4px] text-[11px] whitespace-nowrap ${isDark ? 'bg-dark-200/90' : 'bg-white/90'} shadow-sm transition-opacity`} style={{ borderColor: cat?.color + '50', opacity: evtHov ? 1 : showFullEventLabels ? 0.95 : 0.75 }}>
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat?.color }} />
                            <span className="font-mono text-[10px] opacity-75">{formatYearShort(event.year)}</span>
                            <span className="font-medium truncate" style={{ maxWidth: zoom > 0.7 ? 100 : 60 }}>{event.summary}</span>
                            {bk && <span className="text-yellow-400 text-[9px]">★</span>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}

              </div>
            )
          })}

          <div style={{ height: 30 }} />
        </div>
      </div>

      {/* Hover popup */}
      {hoveredEvent && (() => {
        const evt = events.find((e) => e.id === hoveredEvent)
        if (!evt) return null
        const cat = getCategory(evt.categoryId)
        const cntry = selectedCountries.find((c) => c.id === evt.countryId)
        const cd = allDynasties.find((d) => d.id === evt.dynastyId)
        const cc = cat?.color || '#888'
        return (
          <div
            className="fixed z-[1000] p-3 rounded-lg shadow-2xl border max-w-xs"
            style={{ left: Math.min(hoverPosition.pageX + 10, window.innerWidth - 320), top: Math.min(hoverPosition.pageY + 10, window.innerHeight - 200), backgroundColor: isDark ? '#1a1a2e' : '#fff', borderColor: cc + '60', color: isDark ? '#F5F5DC' : '#1a1a1a' }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-sm font-serif font-bold" style={{ color: cc }}>{formatYear(evt.year)}</div>
                {cd && <div className="text-[10px] px-1.5 py-0.5 rounded mt-0.5 inline-block" style={{ backgroundColor: cd.color + '25', color: cd.color }}>{cd.name}</div>}
              </div>
              <button onClick={() => toggleBookmark(evt.id)} className="p-0.5 rounded hover:bg-white/10">
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(evt.id) ? 'fill-current text-yellow-400' : ''}`} style={{ color: isBookmarked(evt.id) ? '#FFD700' : cc }} />
              </button>
            </div>
            {cat && <div className="text-[10px] px-1.5 py-0.5 rounded-full mb-1.5 inline-block" style={{ backgroundColor: cc + '25', color: cc }}>{cat.icon} {cat.name}</div>}
            <div className="text-xs font-medium mb-1">{evt.summary}</div>
            <div className="text-[10px] leading-relaxed opacity-70">{evt.detail}</div>
            {cntry && <div className="text-[9px] mt-1.5 opacity-50">{cntry.name}{cntry.isDefunct ? '（-）' : ''}</div>}
          </div>
        )
      })()}

      {/* Click detail modal */}
      {showDetail && (() => {
        const cat = getCategory(showDetail.categoryId)
        const cntry = selectedCountries.find((c) => c.id === showDetail.countryId)
        const cd = allDynasties.find((d) => d.id === showDetail.dynastyId)
        const cc = cat?.color || '#888'
        return (
          <div className={`fixed inset-0 z-[1001] flex items-center justify-center p-4 ${isDark ? 'bg-black/60' : 'bg-black/40'}`} onClick={() => setShowDetail(null)}>
            <div className="relative max-w-md w-full p-5 rounded-xl shadow-2xl border backdrop-blur-md" style={{ backgroundColor: isDark ? '#1a1a2e' : '#fff', borderColor: cc + '50', color: isDark ? '#F5F5DC' : '#1a1a1a' }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowDetail(null)} className="absolute top-3 right-3 p-1 rounded hover:bg-white/10">✕</button>
              <div className="flex items-start gap-3 mb-3">
                <div className="text-xl font-serif font-bold" style={{ color: cc }}>{formatYear(showDetail.year)}</div>
                <div className="flex-1">
                  {cd && <div className="text-xs px-2 py-0.5 rounded-full inline-block" style={{ backgroundColor: cd.color + '25', color: cd.color }}>{cd.name}</div>}
                  <div className="text-base font-medium mt-0.5">{showDetail.summary}</div>
                </div>
              </div>
              {cat && <div className="text-xs px-2.5 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: cc + '25', color: cc }}>{cat.icon} {cat.name}</div>}
              <div className="text-sm leading-relaxed mb-4 opacity-90">{showDetail.detail}</div>
              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: cc + '30' }}>
                {cntry && <div className="text-xs opacity-60">{cntry.name}{cntry.isDefunct ? '（-）' : ''}</div>}
                <button onClick={() => toggleBookmark(showDetail.id)} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors" style={{ backgroundColor: isBookmarked(showDetail.id) ? cc + '25' : 'rgba(128,128,128,0.15)', color: isBookmarked(showDetail.id) ? cc : undefined }}>
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(showDetail.id) ? 'fill-current' : ''}`} />
                  {isBookmarked(showDetail.id) ? '已收藏' : '收藏'}
                </button>
              </div>
            </div>
          </div>
        )
      })()}

    </div>
  )
}
