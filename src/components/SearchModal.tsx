import { useState, useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useRegion } from '../context/RegionContext'
import { events } from '../data/events'
import { continents } from '../data/continents'
import { X, Search, Calendar, MapPin } from 'lucide-react'
import type { HistoryEvent } from '../types'

interface SearchModalProps {
  onClose: () => void
}

export default function SearchModal({ onClose }: SearchModalProps) {
  const { isDark } = useTheme()
  const { getSelectedCountryIds } = useRegion()
  const [query, setQuery] = useState('')

  const selectedCountryIds = getSelectedCountryIds()

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return events
      .filter((e) => selectedCountryIds.includes(e.countryId))
      .filter((e) =>
        e.summary.toLowerCase().includes(q) ||
        e.detail.toLowerCase().includes(q) ||
        String(e.year).includes(q)
      )
      .sort((a, b) => a.year - b.year)
      .slice(0, 20)
  }, [query, selectedCountryIds])

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

  const highlightText = (text: string) => {
    if (!query.trim()) return text
    const q = query.trim()
    const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase()
        ? <mark key={i} className="bg-gold-400/30 text-inherit rounded px-0.5">{part}</mark>
        : part
    )
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className={`relative w-full max-w-lg mx-4 rounded-2xl overflow-hidden animate-slide-down ${
        isDark ? 'glass border-gold-400/20' : 'glass-light border-gold-400/30'
      }`}>
        {/* Search input */}
        <div className={`flex items-center gap-3 px-5 py-4 border-b ${isDark ? 'border-gold-400/10' : 'border-gold-400/20'}`}>
          <Search className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-gold-400/60' : 'text-gold-500/60'}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索历史事件、年份..."
            autoFocus
            className={`flex-1 bg-transparent text-sm outline-none ${
              isDark ? 'text-parchment-100 placeholder-gray-500' : 'text-dark-200 placeholder-gray-400'
            }`}
          />
          <button
            onClick={onClose}
            className={`p-1 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <div className={`py-8 text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              未找到相关历史事件
            </div>
          )}

          {results.map((event) => (
            <div
              key={event.id}
              className={`px-5 py-3 border-b last:border-0 transition-colors ${
                isDark ? 'border-gold-400/5 hover:bg-gold-400/5' : 'border-gold-400/10 hover:bg-gold-400/5'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Calendar className={`w-3 h-3 ${isDark ? 'text-gold-400/40' : 'text-gold-500/40'}`} />
                <span className={`text-xs font-medium ${isDark ? 'text-gold-400' : 'text-gold-500'}`}>
                  {formatYear(event.year)}
                </span>
                <MapPin className={`w-3 h-3 ${isDark ? 'text-gold-400/40' : 'text-gold-500/40'}`} />
                <span className={`text-xs ${isDark ? 'text-gold-400/50' : 'text-gold-600/50'}`}>
                  {getCountryName(event.countryId)}
                </span>
              </div>
              <p className={`text-sm font-medium mb-0.5 ${isDark ? 'text-parchment-100' : 'text-dark-200'}`}>
                {highlightText(event.summary)}
              </p>
              <p className={`text-xs line-clamp-2 ${isDark ? 'text-parchment-200/60' : 'text-dark-100/60'}`}>
                {highlightText(event.detail)}
              </p>
            </div>
          ))}

          {!query.trim() && (
            <div className={`py-8 text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              输入关键词搜索历史事件
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
