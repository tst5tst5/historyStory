import { useRef, useCallback, useEffect } from 'react'

export function useDragScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startY = useRef(0)
  const scrollLeft = useRef(0)
  const scrollTop = useRef(0)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    isDragging.current = true
    startX.current = e.pageX - containerRef.current.offsetLeft
    startY.current = e.pageY - containerRef.current.offsetTop
    scrollLeft.current = containerRef.current.scrollLeft
    scrollTop.current = containerRef.current.scrollTop
    containerRef.current.style.cursor = 'grabbing'
    containerRef.current.style.userSelect = 'none'
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const y = e.pageY - containerRef.current.offsetTop
    const walkX = (x - startX.current) * 1.5
    const walkY = (y - startY.current) * 1.2
    containerRef.current.scrollLeft = scrollLeft.current - walkX
    containerRef.current.scrollTop = scrollTop.current - walkY
  }, [])

  const onMouseUp = useCallback(() => {
    if (!containerRef.current) return
    isDragging.current = false
    containerRef.current.style.cursor = 'grab'
    containerRef.current.style.userSelect = ''
  }, [])

  const onMouseLeave = useCallback(() => {
    if (!containerRef.current) return
    isDragging.current = false
    containerRef.current.style.cursor = 'grab'
    containerRef.current.style.userSelect = ''
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let touchStartX = 0
    let touchStartY = 0
    let touchScrollLeft = 0
    let touchScrollTop = 0

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX - container.offsetLeft
      touchStartY = e.touches[0].pageY - container.offsetTop
      touchScrollLeft = container.scrollLeft
      touchScrollTop = container.scrollTop
    }

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const y = e.touches[0].pageY - container.offsetTop
      const walkX = (x - touchStartX) * 1.5
      const walkY = (y - touchStartY) * 1.2
      container.scrollLeft = touchScrollLeft - walkX
      container.scrollTop = touchScrollTop - walkY
    }

    container.addEventListener('touchstart', onTouchStart, { passive: false })
    container.addEventListener('touchmove', onTouchMove, { passive: false })

    return () => {
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return {
    containerRef,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
  }
}
