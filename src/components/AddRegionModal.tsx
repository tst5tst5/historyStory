import { useState, useMemo } from 'react'
import { useRegion } from '../context/RegionContext'
import { useTheme } from '../context/ThemeContext'
import { continents } from '../data/continents'
import { X, Search, Check, Globe, MapPin } from 'lucide-react'
import type { SelectedCountry } from '../types'

interface AddRegionModalProps {
  onClose: () => void
}

export default function AddRegionModal({ onClose }: AddRegionModalProps) {
  const { isCountrySelected, addCountries } = useRegion()
  const { isDark } = useTheme()
  const [search, setSearch] = useState('')
  const [selectedContinent, setSelectedContinent] = useState(continents[0].id)
  const [pendingCountries, setPendingCountries] = useState<Set<string>>(new Set())

  const filteredContinents = useMemo(() => {
    if (!search) return continents
    return continents.filter(
      (c) =>
        c.name.includes(search) ||
        c.countries.some((country) => country.name.includes(search))
    )
  }, [search])

  const currentContinent = filteredContinents.find((c) => c.id === selectedContinent) || filteredContinents[0]

  const filteredCountries = useMemo(() => {
    if (!currentContinent) return []
    if (!search) return currentContinent.countries
    return currentContinent.countries.filter(
      (c) => c.name.includes(search) || currentContinent.name.includes(search)
    )
  }, [currentContinent, search])

  const isContinentFullyAdded = useMemo(() => {
    if (!currentContinent) return false
    return currentContinent.countries.every((c) => isCountrySelected(c.id))
  }, [currentContinent, isCountrySelected])

  const togglePending = (countryId: string) => {
    setPendingCountries((prev) => {
      const next = new Set(prev)
      if (next.has(countryId)) next.delete(countryId)
      else next.add(countryId)
      return next
    })
  }

  const selectAllInContinent = () => {
    if (!currentContinent) return
    const notAdded = currentContinent.countries.filter((c) => !isCountrySelected(c.id))
    const allPending = notAdded.every((c) => pendingCountries.has(c.id))
    setPendingCountries((prev) => {
      const next = new Set(prev)
      notAdded.forEach((c) => {
        if (allPending) next.delete(c.id)
        else next.add(c.id)
      })
      return next
    })
  }

  const handleConfirm = () => {
    if (pendingCountries.size === 0) return
    const newCountries: SelectedCountry[] = []
    for (const countryId of pendingCountries) {
      for (const continent of continents) {
        const country = continent.countries.find((c) => c.id === countryId)
        if (country) {
          newCountries.push({
            countryId: country.id,
            countryName: country.name,
            continentId: continent.id,
            isDefunct: country.isDefunct || false,
          })
          break
        }
      }
    }
    addCountries(newCountries)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className={`relative w-full max-w-2xl mx-4 rounded-2xl overflow-hidden animate-scale-in ${
        isDark ? 'glass border-gold-400/20' : 'glass-light border-gold-400/30'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-gold-400/10' : 'border-gold-400/20'}`}>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-gold-400" />
            <h2 className={`text-lg font-serif font-bold ${isDark ? 'text-gold-400' : 'text-gold-500'}`}>
              添加区域
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 pt-4">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索大洲或国家..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-300 ${
                isDark
                  ? 'bg-dark-100/60 border border-gold-400/15 text-parchment-100 placeholder-gray-500 focus:border-gold-400/40'
                  : 'bg-white/60 border border-gold-400/20 text-dark-200 placeholder-gray-400 focus:border-gold-500/40'
              }`}
            />
          </div>
        </div>

        {/* Content: two columns */}
        <div className="flex min-h-[320px] max-h-[400px]">
          {/* Left: Continents */}
          <div className={`w-1/3 border-r ${isDark ? 'border-gold-400/10' : 'border-gold-400/20'} overflow-y-auto`}>
            {filteredContinents.map((continent) => (
              <button
                key={continent.id}
                onClick={() => setSelectedContinent(continent.id)}
                className={`w-full flex items-center gap-2 px-4 py-3 text-sm text-left transition-all duration-200 ${
                  continent.id === currentContinent?.id
                    ? isDark
                      ? 'bg-gold-400/10 text-gold-400 border-r-2 border-gold-400'
                      : 'bg-gold-400/5 text-gold-500 border-r-2 border-gold-500'
                    : isDark
                      ? 'text-gray-400 hover:bg-gold-400/5 hover:text-gray-200'
                      : 'text-gray-500 hover:bg-gold-400/5 hover:text-gray-700'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{continent.name}</span>
              </button>
            ))}
          </div>

          {/* Right: Countries */}
          <div className="w-2/3 overflow-y-auto p-4">
            {/* Select all row */}
            {currentContinent && (
              <button
                onClick={selectAllInContinent}
                className={`w-full flex items-center gap-2 px-3 py-2 mb-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isContinentFullyAdded
                    ? isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-500/5 text-green-600'
                    : isDark
                      ? 'bg-gold-400/10 text-gold-400 hover:bg-gold-400/15'
                      : 'bg-gold-400/5 text-gold-500 hover:bg-gold-400/10'
                }`}
              >
                <Check className="w-4 h-4" />
                {isContinentFullyAdded ? '已全部添加' : '全选当前大洲'}
              </button>
            )}

            <div className="space-y-1">
              {filteredCountries.map((country) => {
                const alreadyAdded = isCountrySelected(country.id)
                const isPending = pendingCountries.has(country.id)

                return (
                  <button
                    key={country.id}
                    onClick={() => !alreadyAdded && togglePending(country.id)}
                    disabled={alreadyAdded}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                      alreadyAdded
                        ? isDark ? 'bg-green-500/5 text-green-400/60 cursor-not-allowed' : 'bg-green-500/5 text-green-600/60 cursor-not-allowed'
                        : isPending
                          ? isDark ? 'bg-gold-400/15 text-gold-400 ring-1 ring-gold-400/30' : 'bg-gold-400/10 text-gold-500 ring-1 ring-gold-500/30'
                          : isDark
                            ? 'text-gray-300 hover:bg-gold-400/5'
                            : 'text-gray-600 hover:bg-gold-400/5'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                      alreadyAdded
                        ? 'border-green-400/40 bg-green-400/10'
                        : isPending
                          ? 'border-gold-400/60 bg-gold-400/20'
                          : isDark ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      {(alreadyAdded || isPending) && <Check className="w-3 h-3" />}
                    </div>
                    <span>{country.name}{country.isDefunct ? '（-）' : ''}</span>
                    {alreadyAdded && <span className="ml-auto text-[10px] opacity-60">已添加</span>}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between px-6 py-4 border-t ${isDark ? 'border-gold-400/10' : 'border-gold-400/20'}`}>
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            已选择 <span className="text-gold-400 font-medium">{pendingCountries.size}</span> 个国家
          </span>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                isDark ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
              }`}
            >
              取消
            </button>
            <button
              onClick={handleConfirm}
              disabled={pendingCountries.size === 0}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pendingCountries.size > 0
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-dark-200 hover:from-gold-400 hover:to-gold-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-95'
                  : isDark ? 'bg-gray-700/30 text-gray-500 cursor-not-allowed' : 'bg-gray-200/30 text-gray-400 cursor-not-allowed'
              }`}
            >
              确认添加
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
