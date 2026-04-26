import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import type { SelectedContinent, SelectedCountry, SelectedDocument } from '../types'
import { continents } from '../data/continents'
import { documentCategories } from '../data/documents'

// 顶层分类：地理区划 vs 文献
export type TopCategory = 'geography' | 'document'

interface RegionContextType {
  selectedRegions: SelectedContinent[]
  selectedDocuments: SelectedDocument[]
  addCountries: (newCountries: SelectedCountry[]) => void
  removeCountry: (countryId: string) => void
  isCountrySelected: (countryId: string) => boolean
  getSelectedCountryIds: () => string[]
  // 文献相关
  addDocument: (docId: string) => void
  removeDocument: (docId: string) => void
  isDocumentSelected: (docId: string) => boolean
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

const DEFAULT_DOCUMENTS: SelectedDocument[] = []

export function RegionProvider({ children }: { children: ReactNode }) {
  const [selectedRegions, setSelectedRegions] = useState<SelectedContinent[]>(() => {
    const saved = localStorage.getItem('history_selected_regions')
    if (saved) {
      const parsed = JSON.parse(saved) as SelectedContinent[]
      if (parsed.length > 0) return parsed
    }
    return DEFAULT_REGIONS
  })

  const [selectedDocuments, setSelectedDocuments] = useState<SelectedDocument[]>(() => {
    const saved = localStorage.getItem('history_selected_documents')
    if (saved) {
      const parsed = JSON.parse(saved) as SelectedDocument[]
      if (parsed.length > 0) return parsed
    }
    return DEFAULT_DOCUMENTS
  })

  useEffect(() => {
    localStorage.setItem('history_selected_regions', JSON.stringify(selectedRegions))
  }, [selectedRegions])

  useEffect(() => {
    localStorage.setItem('history_selected_documents', JSON.stringify(selectedDocuments))
  }, [selectedDocuments])

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

  // 文献相关方法
  const addDocument = useCallback((docId: string) => {
    setSelectedDocuments((prev) => {
      if (prev.find((d) => d.documentId === docId)) return prev
      const doc = documentCategories.find((d) => d.id === docId)
      if (!doc) return prev
      return [...prev, {
        documentId: doc.id,
        documentName: doc.name,
        startYear: doc.startYear,
        endYear: doc.endYear,
        color: doc.color,
      }]
    })
  }, [])

  const removeDocument = useCallback((docId: string) => {
    setSelectedDocuments((prev) => prev.filter((d) => d.documentId !== docId))
  }, [])

  const isDocumentSelected = useCallback(
    (docId: string) => {
      return selectedDocuments.some((d) => d.documentId === docId)
    },
    [selectedDocuments]
  )

  return (
    <RegionContext.Provider
      value={{
        selectedRegions,
        selectedDocuments,
        addCountries,
        removeCountry,
        isCountrySelected,
        getSelectedCountryIds,
        addDocument,
        removeDocument,
        isDocumentSelected,
      }}
    >
      {children}
    </RegionContext.Provider>
  )
}
