import { useState, useMemo, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useRegion } from '../context/RegionContext'
import { events } from '../data/events'
import { continents } from '../data/continents'
import { X, Bookmark, BookmarkCheck, Trash2 } from 'lucide-react'
import type { HistoryEvent } from '../types'

interface BookmarkPanelProps {
  onClose: () => void
}

const BOOKMARKS_KEY = 'history_bookmarks'

function getBookmarks(): string[] {
  const saved = localStorage.getItem(BOOKMARKS_KEY)
  return saved ? JSON.parse(saved) : []
}

function saveBookmarks(ids: string[]) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(ids))
}

export function useBookmarks() {
  const [bookmarkIds, setBookmarkIds] = useState<string[]>(getBookmarks)

  const toggleBookmark = useCallback((eventId: string) => {
    setBookmarkIds((prev) => {
      const next = prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
      saveBookmarks(next)
      return next
    })
  }, [])

  const isBookmarked = useCallback((eventId: string) => {
    return bookmarkIds.includes(eventId)
  }, [bookmarkIds])

  return { bookmarkIds, toggleBookmark, isBookmarked }
}

export default function BookmarkPanel({ onClose }: BookmarkPanelProps) {
  const { isDark } = useTheme()
  const { getSelectedCountryIds } = useRegion()
  const selectedCountryIds = getSelectedCountryIds()
  const [bookmarkIds, setBookmarkIds] = useState<string[]>(getBookmarks)

  const bookmarkedEvents = useMemo(() => {
    return bookmarkIds
      .map((id) => events.find((e) => e.id === id))
      .filter((e): e is HistoryEvent => !!e)
      .filter((e) => selectedCountryIds.includes(e.countryId))
      .sort((a, b) => a.year - b.year)
  }, [bookmarkIds, selectedCountryIds])

  const removeBookmark = (eventId: string) => {
    const next = bookmarkIds.filter((id) => id !== eventId)
    setBookmarkIds(next)
    saveBookmarks(next)
  }

  const getCountryName = (countryId: string) => {
    for (const c of continents) {
      const country = c.countries.find((co) => co.id === countryId)
      if (country) return country.name
    }
    return ''
  }

  const formatYear = (year: number) => {
    if (year < 0) return `公元前${Math.abs(year)}年`
    return `公元${year}年`
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-end pt-14">
      <div className="absolute inset-0" onClick={onClose} />

      <div className={`relative w-80 h-[calc(100vh-56px)] mr-0 overflow-hidden animate-slide-down ${
        isDark ? 'glass border-l border-gold-400/15' : 'glass-light border-l border-gold-400/25'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-5 py-4 border-b ${isDark ? 'border-gold-400/10' : 'border-gold-400/20'}`}>
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-4 h-4 text-gold-400" />
            <h3 className={`text-sm font-semibold ${isDark ? 'text-gold-400' : 'text-gold-500'}`}>
              收藏夹
            </h3>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${isDark ? 'bg-gold-400/10 text-gold-400/60' : 'bg-gold-400/5 text-gold-600/60'}`}>
              {bookmarkedEvents.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className={`p-1 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List */}
        <div className="overflow-y-auto h-[calc(100%-60px)]">
          {bookmarkedEvents.length === 0 && (
            <div className={`py-12 text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <Bookmark className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-gold-400/20' : 'text-gold-500/20'}`} />
              <p>还没有收藏历史事件</p>
              <p className="text-xs mt-1 opacity-60">hover事件时点击收藏按钮</p>
            </div>
          )}

          {bookmarkedEvents.map((event) => (
            <div
              key={event.id}
              className={`group px-5 py-3 border-b transition-colors ${
                isDark ? 'border-gold-400/5 hover:bg-gold-400/5' : 'border-gold-400/10 hover:bg-gold-400/5'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      isDark ? 'bg-gold-400/10 text-gold-400' : 'bg-gold-400/5 text-gold-500'
                    }`}>
                      {formatYear(event.year)}
                    </span>
                    <span className={`text-[10px] ${isDark ? 'text-gold-400/40' : 'text-gold-600/40'}`}>
                      {getCountryName(event.countryId)}
                    </span>
                  </div>
                  <p className={`text-xs font-medium ${isDark ? 'text-parchment-100' : 'text-dark-200'}`}>
                    {event.summary}
                  </p>
                </div>
                <button
                  onClick={() => removeBookmark(event.id)}
                  className={`p-1 rounded opacity-0 group-hover:opacity-100 transition-all ${
                    isDark ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
