import { useCategories } from '../context/CategoryContext'
import { useTheme } from '../context/ThemeContext'
import { eventCategories } from '../data/categories'
import { Check, X, CheckCheck } from 'lucide-react'

export default function CategoryFilter() {
  const { isDark } = useTheme()
  const { selectedCategories, toggleCategory, selectAll, deselectAll, isAllSelected } = useCategories()

  return (
    <div className={`flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-dark-100/50' : 'bg-parchment-100/80'} border-b border-gold-400/10`}>
      <span className={`text-xs font-medium ${isDark ? 'text-gold-400/70' : 'text-gold-600/70'}`}>
        分类筛选：
      </span>
      
      <div className="flex items-center gap-1.5 flex-wrap">
        {eventCategories.map((category) => {
          const isSelected = selectedCategories.has(category.id)
          return (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs transition-all duration-200 border ${
                isSelected
                  ? 'border-transparent'
                  : 'border-gold-400/20 opacity-40'
              }`}
              style={{
                backgroundColor: isSelected ? category.bgColor : 'transparent',
                borderColor: isSelected ? category.color + '60' : undefined,
                color: isSelected ? category.color : (isDark ? '#9CA3AF' : '#6B7280'),
              }}
            >
              {isSelected && <Check className="w-3 h-3" />}
              <span>{category.name}</span>
            </button>
          )
        })}
      </div>

      <div className="ml-auto flex items-center gap-1">
        <button
          onClick={selectAll}
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
            isAllSelected
              ? 'text-gold-400 bg-gold-400/10'
              : isDark ? 'text-gray-400 hover:text-gold-400' : 'text-gray-500 hover:text-gold-600'
          }`}
        >
          <CheckCheck className="w-3 h-3" />
          <span>全选</span>
        </button>
        <button
          onClick={deselectAll}
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
            selectedCategories.size === 0
              ? 'text-red-400 bg-red-400/10'
              : isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <X className="w-3 h-3" />
          <span>清空</span>
        </button>
      </div>
    </div>
  )
}
