import { useState } from 'react'
import { useOrientation } from '../hooks/useOrientation'
import { useTheme } from '../context/ThemeContext'
import Layout from '../components/Layout'
import Toolbar from '../components/Toolbar'
import RegionPanel from '../components/RegionPanel'
import Timeline from '../components/Timeline'
import CategoryFilter from '../components/CategoryFilter'
import AddRegionModal from '../components/AddRegionModal'
import SearchModal from '../components/SearchModal'
import BookmarkPanel from '../components/BookmarkPanel'

export default function HomePage() {
  const { isLandscape, toggleOrientation } = useOrientation()
  const { isDark } = useTheme()
  const [showAddRegion, setShowAddRegion] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showBookmarks, setShowBookmarks] = useState(false)

  return (
    <div className={`min-h-screen ${isDark ? 'dark-bg text-parchment-100' : 'parchment-bg text-dark-200'}`}>
      <Layout
        isLandscape={isLandscape}
        toolbar={
          <Toolbar
            onOpenAddRegion={() => setShowAddRegion(true)}
            onOpenSearch={() => setShowSearch(true)}
            onOpenBookmarks={() => setShowBookmarks(true)}
            isLandscape={isLandscape}
            onToggleOrientation={toggleOrientation}
          />
        }
        regionPanel={<RegionPanel isLandscape={isLandscape} />}
        timeline={
          <div className="flex flex-col h-full">
            <CategoryFilter />
            <div className="flex-1 overflow-hidden">
              <Timeline />
            </div>
          </div>
        }
      />

      {showAddRegion && <AddRegionModal onClose={() => setShowAddRegion(false)} />}
      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
      {showBookmarks && <BookmarkPanel onClose={() => setShowBookmarks(false)} />}
    </div>
  )
}
