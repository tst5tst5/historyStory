import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import type { SelectedContinent, SelectedCountry } from '../types'
import { continents } from '../data/continents'

interface RegionContextType {
  selectedRegions: SelectedContinent[]
  addCountries: (newCountries: SelectedCountry[]) => void
  removeCountry: (countryId: string) => void
  isCountrySelected: (countryId: string) => boolean
  getSelectedCountryIds: () => string[]
}

const RegionContext = createContext<RegionContextType | null>(null)

export function useRegion() {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error('useRegion must be used within RegionProvider')
  return ctx
}

const DEFAULT_REGIONS: SelectedContinent[] = [
  {
    continentId: 'asia',
    continentName: '亚洲',
    countries: [
      { countryId: 'china', countryName: '中国', continentId: 'asia' },
    ],
  },
]

export function RegionProvider({ children }: { children: ReactNode }) {
  const [selectedRegions, setSelectedRegions] = useState<SelectedContinent[]>(() => {
    const saved = localStorage.getItem('history_selected_regions')
    if (saved) {
      const parsed = JSON.parse(saved) as SelectedContinent[]
      if (parsed.length > 0) return parsed
    }
    return DEFAULT_REGIONS
  })

  useEffect(() => {
    localStorage.setItem('history_selected_regions', JSON.stringify(selectedRegions))
  }, [selectedRegions])

  const addCountries = useCallback((newCountries: SelectedCountry[]) => {
    setSelectedRegions((prev) => {
      const updated = [...prev]
      for (const country of newCountries) {
        const existingContinent = updated.find((c) => c.continentId === country.continentId)
        if (existingContinent) {
          if (!existingContinent.countries.find((c) => c.countryId === country.countryId)) {
            existingContinent.countries.push(country)
          }
        } else {
          const continent = continents.find((c) => c.id === country.continentId)
          if (continent) {
            updated.push({
              continentId: country.continentId,
              continentName: continent.name,
              countries: [country],
            })
          }
        }
      }
      return updated
    })
  }, [])

  const removeCountry = useCallback((countryId: string) => {
    setSelectedRegions((prev) => {
      const updated = prev
        .map((continent) => ({
          ...continent,
          countries: continent.countries.filter((c) => c.countryId !== countryId),
        }))
        .filter((continent) => continent.countries.length > 0)
      return updated
    })
  }, [])

  const isCountrySelected = useCallback(
    (countryId: string) => {
      return selectedRegions.some((c) =>
        c.countries.some((country) => country.countryId === countryId)
      )
    },
    [selectedRegions]
  )

  const getSelectedCountryIds = useCallback(() => {
    return selectedRegions.flatMap((c) => c.countries.map((country) => country.countryId))
  }, [selectedRegions])

  return (
    <RegionContext.Provider value={{ selectedRegions, addCountries, removeCountry, isCountrySelected, getSelectedCountryIds }}>
      {children}
    </RegionContext.Provider>
  )
}
