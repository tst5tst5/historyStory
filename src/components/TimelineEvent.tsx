import { useCallback, type MouseEvent } from 'react'
import type { HistoryEvent } from '../types'

interface TimelineEventProps {
  event: HistoryEvent
  x: number
  isTop: boolean
  isDark: boolean
  formatYear: (year: number) => string
  countryName: string
  continentName: string
  onHover: (event: HistoryEvent, element: HTMLElement) => void
  onLeave: () => void
}

export default function TimelineEvent({
  event, x, isTop, isDark, formatYear,
  countryName, continentName, onHover, onLeave,
}: TimelineEventProps) {
  const handleMouseEnter = useCallback((e: MouseEvent<HTMLDivElement>) => {
    onHover(event, e.currentTarget)
  }, [event, onHover])

  return (
    <div
      className="absolute"
      style={{
        left: `${x}px`,
        top: isTop ? '15%' : '55%',
        transform: 'translateX(-50%)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
    >
      {/* Connector line */}
      <div className={`absolute left-1/2 -translate-x-1/2 w-px ${isDark ? 'bg-gold-400/20' : 'bg-gold-500/20'}`}
        style={{ height: isTop ? 'calc(35% - 8px)' : 'calc(35% - 8px)', top: isTop ? '100%' : 'auto', bottom: isTop ? 'auto' : '100%' }}
      />

      {/* Content card */}
      <div className={`relative px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 group ${
        isDark
          ? 'bg-dark-100/80 border border-gold-400/15 hover:border-gold-400/40 hover:bg-dark-100'
          : 'bg-white/80 border border-gold-400/20 hover:border-gold-400/50 hover:bg-white'
      }`}
        style={{ width: '160px' }}
      >
        {/* Year badge */}
        <div className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium mb-1 ${
          isDark ? 'bg-gold-400/10 text-gold-400' : 'bg-gold-400/5 text-gold-500'
        }`}>
          <span>{formatYear(event.year)}</span>
        </div>

        {/* Summary */}
        <p className={`text-xs font-medium leading-snug ${
          isDark ? 'text-parchment-100' : 'text-dark-200'
        }`}>
          {event.summary}
        </p>

        {/* Country/continent tag */}
        <div className="flex items-center gap-1 mt-1.5">
          <span className={`text-[10px] px-1 py-0.5 rounded ${
            isDark ? 'bg-gold-400/5 text-gold-400/50' : 'bg-gold-400/5 text-gold-600/50'
          }`}>
            {continentName}
          </span>
          <span className={`text-[10px] px-1 py-0.5 rounded ${
            isDark ? 'bg-gold-400/10 text-gold-400/60' : 'bg-gold-400/10 text-gold-600/60'
          }`}>
            {countryName}
          </span>
        </div>

        {/* Dot on timeline */}
        <div className={`absolute ${isTop ? '-bottom-[5px]' : '-top-[5px]'} left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 ${
          isDark
            ? 'bg-gold-400 border-dark-200 group-hover:bg-gold-300 group-hover:shadow-[0_0_8px_rgba(201,169,110,0.5)]'
            : 'bg-gold-500 border-parchment-100 group-hover:bg-gold-400 group-hover:shadow-[0_0_8px_rgba(201,169,110,0.5)]'
        } transition-all duration-300`} />
      </div>
    </div>
  )
}
