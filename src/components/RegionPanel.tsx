import { useState } from 'react'
import { useRegion } from '../context/RegionContext'
import { useTheme } from '../context/ThemeContext'
import { events } from '../data/events'
import { documentEvents } from '../data/documents'
import { ChevronDown, ChevronRight, X, MapPin, BookOpen } from 'lucide-react'
import type { SelectedContinent } from '../types'

interface RegionPanelProps {
  isLandscape: boolean
}

export default function RegionPanel({ isLandscape }: RegionPanelProps) {
  const { selectedRegions, removeCountry, selectedDocuments, removeDocument } = useRegion()
  const { isDark } = useTheme()
  const [expandedContinents, setExpandedContinents] = useState<Set<string>>(
    new Set(selectedRegions.map((r) => r.continentId))
  )
  const [expandedDocuments, setExpandedDocuments] = useState<Set<string>>(
    new Set(selectedDocuments.map((d) => d.documentId))
  )

  const toggleContinent = (id: string) => {
    setExpandedContinents((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleDocument = (id: string) => {
    setExpandedDocuments((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  if (isLandscape) {
    return (
      <div className={`h-full p-4 overflow-y-auto ${isDark ? 'bg-dark-200/40' : 'bg-parchment-50/40'}`}>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-gold-400" />
          <h2 className={`text-sm font-semibold ${isDark ? 'text-gold-400' : 'text-gold-500'}`}>
            已选事件
          </h2>
          <span className={`text-xs px-1.5 py-0.5 rounded-full ${isDark ? 'bg-gold-400/10 text-gold-400/60' : 'bg-gold-400/5 text-gold-600/60'}`}>
            {selectedRegions.reduce((acc, c) => acc + c.countries.length, 0) + selectedDocuments.length}
          </span>
        </div>

        <div className="space-y-2">
          {/* Document categories */}
          {selectedDocuments.map((doc) => (
            <DocumentGroup
              key={doc.documentId}
              document={doc}
              isExpanded={expandedDocuments.has(doc.documentId)}
              onToggle={() => toggleDocument(doc.documentId)}
              onRemove={() => removeDocument(doc.documentId)}
              isDark={isDark}
            />
          ))}

          {/* Region categories */}
          {selectedRegions.map((continent) => (
            <ContinentGroup
              key={continent.continentId}
              continent={continent}
              isExpanded={expandedContinents.has(continent.continentId)}
              onToggle={() => toggleContinent(continent.continentId)}
              onRemoveCountry={removeCountry}
              isDark={isDark}
            />
          ))}
        </div>

        {selectedRegions.length === 0 && selectedDocuments.length === 0 && (
          <div className={`text-center py-8 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            点击工具栏"添加事件"开始探索
          </div>
        )}
      </div>
    )
  }

  // Portrait: horizontal layout
  return (
    <div className={`p-3 ${isDark ? 'bg-dark-200/40' : 'bg-parchment-50/40'}`}>
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {/* Documents */}
        {selectedDocuments.map((doc) => (
          <div key={doc.documentId} className="flex items-center gap-1 flex-shrink-0">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                isDark
                  ? 'bg-gold-400/10 text-gold-400 border border-gold-400/20'
                  : 'bg-gold-400/5 text-gold-600 border border-gold-400/30'
              }`}
              style={{ borderLeftColor: doc.color, borderLeftWidth: 3 }}
            >
              <BookOpen className="w-3 h-3" />
              {doc.documentName}
              <button
                onClick={() => removeDocument(doc.documentId)}
                className="hover:text-red-400 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
            <div className="w-px h-4 bg-gold-400/20 flex-shrink-0" />
          </div>
        ))}

        {/* Regions */}
        {selectedRegions.map((continent) => (
          <div key={continent.continentId} className="flex items-center gap-2 flex-shrink-0">
            <span className={`text-xs font-semibold ${isDark ? 'text-gold-400/70' : 'text-gold-500/70'}`}>
              {continent.continentName}
            </span>
            <div className="flex items-center gap-1">
              {continent.countries.map((country) => (
                <span
                  key={country.countryId}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                    isDark
                      ? 'bg-gold-400/10 text-gold-400 border border-gold-400/20'
                      : 'bg-gold-400/5 text-gold-600 border border-gold-400/30'
                  }`}
                >
                  {country.countryName}
                  <button
                    onClick={() => removeCountry(country.countryId)}
                    className="hover:text-red-400 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="w-px h-4 bg-gold-400/20 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}

interface DocumentGroupProps {
  document: { documentId: string; documentName: string; color: string; startYear: number; endYear: number }
  isExpanded: boolean
  onToggle: () => void
  onRemove: () => void
  isDark: boolean
}

function DocumentGroup({ document, isExpanded, onToggle, onRemove, isDark }: DocumentGroupProps) {
  const getEventCount = (docId: string) => {
    return documentEvents.filter((e) => e.documentId === docId).length
  }

  const formatYear = (y: number) => y < 0 ? `公元前${Math.abs(y)}年` : `公元${y}年`

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="animate-fade-in">
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center gap-2 py-2 px-2 rounded-lg cursor-pointer transition-all duration-200 ${
          isDark ? 'hover:bg-gold-400/5' : 'hover:bg-gold-400/5'
        }`}
      >
        {isExpanded ? (
          <ChevronDown className="w-3.5 h-3.5 text-gold-400" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
        )}
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: document.color }}
        />
        <span className={`text-sm font-medium ${isDark ? 'text-gold-400' : 'text-gold-500'}`}>
          {document.documentName}
        </span>
        <span className={`text-xs ${isDark ? 'text-gold-400/40' : 'text-gold-600/40'}`}>
          ({getEventCount(document.documentId)}件)
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onRemove() }}
          className={`ml-auto p-0.5 rounded transition-all duration-200 ${
            isDark ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {isExpanded && (
        <div className="ml-5 space-y-1 py-1 border-l border-gold-400/15 pl-3" style={{ transition: 'all 0.2s ease' }}>
          <div className={`text-[10px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {formatYear(document.startYear)} - {formatYear(document.endYear)}
          </div>
        </div>
      )}
    </div>
  )
}

interface ContinentGroupProps {
  continent: SelectedContinent
  isExpanded: boolean
  onToggle: () => void
  onRemoveCountry: (id: string) => void
  isDark: boolean
}

function ContinentGroup({ continent, isExpanded, onToggle, onRemoveCountry, isDark }: ContinentGroupProps) {
  const getEventCount = (countryId: string) => {
    return events.filter((e) => e.countryId === countryId).length
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="animate-fade-in">
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center gap-2 py-2 px-2 rounded-lg cursor-pointer transition-all duration-200 ${
          isDark ? 'hover:bg-gold-400/5' : 'hover:bg-gold-400/5'
        }`}
      >
        {isExpanded ? (
          <ChevronDown className="w-3.5 h-3.5 text-gold-400" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
        )}
        <span className={`text-sm font-medium ${isDark ? 'text-gold-400' : 'text-gold-500'}`}>
          {continent.continentName}
        </span>
        <span className={`text-xs ${isDark ? 'text-gold-400/40' : 'text-gold-600/40'}`}>
          ({continent.countries.length})
        </span>
      </div>

      {isExpanded && (
        <div className="ml-5 space-y-1 py-1 border-l border-gold-400/15 pl-3" style={{ transition: 'all 0.2s ease' }}>
          {continent.countries.map((country) => {
            return (
              <div
                key={country.countryId}
                className={`group flex items-center justify-between px-2 py-1.5 rounded-md transition-all duration-200 ${
                  isDark ? 'hover:bg-gold-400/5' : 'hover:bg-gold-400/5'
                }`}
              >
                <span className={`text-xs ${isDark ? 'text-parchment-200' : 'text-dark-100'}`}>
                  {country.countryName}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] ${isDark ? 'text-gold-400/30' : 'text-gold-600/30'}`}>
                    {getEventCount(country.countryId)}件
                  </span>
                  <button
                    onClick={() => onRemoveCountry(country.countryId)}
                    className={`opacity-0 group-hover:opacity-100 p-0.5 rounded transition-all duration-200 ${
                      isDark ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
