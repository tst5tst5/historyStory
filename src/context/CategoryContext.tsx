import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { eventCategories } from '../data/categories'

interface CategoryContextType {
  selectedCategories: Set<string>
  toggleCategory: (categoryId: string) => void
  selectAll: () => void
  deselectAll: () => void
  isAllSelected: boolean
}

const CategoryContext = createContext<CategoryContextType | null>(null)

export function CategoryProvider({ children }: { children: ReactNode }) {
  // 默认全选所有分类
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    () => new Set(eventCategories.map((c) => c.id))
  )

  const toggleCategory = useCallback((categoryId: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(categoryId)) {
        next.delete(categoryId)
      } else {
        next.add(categoryId)
      }
      return next
    })
  }, [])

  const selectAll = useCallback(() => {
    setSelectedCategories(new Set(eventCategories.map((c) => c.id)))
  }, [])

  const deselectAll = useCallback(() => {
    setSelectedCategories(new Set())
  }, [])

  const isAllSelected = selectedCategories.size === eventCategories.length

  return (
    <CategoryContext.Provider
      value={{ selectedCategories, toggleCategory, selectAll, deselectAll, isAllSelected }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategories() {
  const context = useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategories must be used within CategoryProvider')
  }
  return context
}
