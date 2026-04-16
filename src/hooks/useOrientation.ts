import { useState, useEffect } from 'react'
import type { Orientation } from '../types'

export function useOrientation() {
  const [orientation, setOrientation] = useState<Orientation>(() => {
    if (window.matchMedia('(orientation: landscape)').matches) return 'landscape'
    return 'portrait'
  })

  const [manualOverride, setManualOverride] = useState<Orientation | null>(null)

  useEffect(() => {
    const mql = window.matchMedia('(orientation: landscape)')
    const handler = (e: MediaQueryListEvent) => {
      if (!manualOverride) {
        setOrientation(e.matches ? 'landscape' : 'portrait')
      }
    }
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [manualOverride])

  const toggleOrientation = () => {
    setManualOverride((prev) => {
      const next = (prev || orientation) === 'landscape' ? 'portrait' : 'landscape'
      setOrientation(next)
      return next
    })
  }

  const current = manualOverride || orientation

  return { orientation: current, toggleOrientation, isLandscape: current === 'landscape' }
}
