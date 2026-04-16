import { useState } from 'react'
import { Bookmark, BookmarkCheck } from 'lucide-react'
import type { HistoryEvent } from '../types'

interface EventDetailProps {
  event: HistoryEvent
  position: { x: number; y: number }
  countryName: string
  formatYear: (year: number) => string
  isDark: boolean
  isBookmarked: boolean
  onToggleBookmark: (eventId: string) => void
}

const BOOKMARKS_KEY = 'history_bookmarks'

function getBookmarks(): string[] {
  const saved = localStorage.getItem(BOOKMARKS_KEY)
  return saved ? JSON.parse(saved) : []
}

function saveBookmarks(ids: string[]) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(ids))
}

export default function EventDetail({ event, position, countryName, formatYear, isDark, isBookmarked, onToggleBookmark }: EventDetailProps) {
  const isTopHalf = position.y > 150

  const handleBookmark = () => {
    const bookmarks = getBookmarks()
    const next = isBookmarked
      ? bookmarks.filter((id) => id !== event.id)
      : [...bookmarks, event.id]
    saveBookmarks(next)
    onToggleBookmark(event.id)
  }

  return (
    <div
      className="absolute z-30 animate-fade-in"
      style={{
        left: `${position.x}px`,
        top: isTopHalf ? `${position.y - 16}px` : `${position.y + 16}px`,
        transform: isTopHalf ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
      }}
    >
      <div className={`w-80 rounded-xl overflow-hidden shadow-2xl ${
        isDark
          ? 'glass border-gold-400/25'
          : 'glass-light border-gold-400/35'
      }`}>
        {/* Header */}
        <div className={`px-4 py-3 border-b ${isDark ? 'border-gold-400/15' : 'border-gold-400/20'}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
              isDark ? 'bg-gold-400/15 text-gold-400' : 'bg-gold-400/10 text-gold-500'
            }`}>
              {formatYear(event.year)}
            </span>
            <span className={`text-xs ${isDark ? 'text-gold-400/50' : 'text-gold-600/50'}`}>
              {countryName}
            </span>
            <button
              onClick={handleBookmark}
              className={`ml-auto p-1 rounded transition-all duration-200 ${
                isBookmarked
                  ? 'text-gold-400'
                  : isDark ? 'text-gray-500 hover:text-gold-400' : 'text-gray-400 hover:text-gold-500'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
          </div>
          <h3 className={`text-sm font-semibold ${isDark ? 'text-parchment-100' : 'text-dark-200'}`}>
            {event.summary}
          </h3>
        </div>

        {/* Detail */}
        <div className="px-4 py-3">
          <p className={`text-xs leading-relaxed ${isDark ? 'text-parchment-200' : 'text-dark-100'}`}>
            {event.detail}
          </p>
        </div>
      </div>
    </div>
  )
}
