import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import {
  BookOpen, Search, Monitor, Sun, Moon, Bookmark,
  LogOut, User, Plus,
} from 'lucide-react'

interface ToolbarProps {
  onOpenAddRegion: () => void
  onOpenSearch: () => void
  onOpenBookmarks: () => void
  isLandscape: boolean
  onToggleOrientation: () => void
}

export default function Toolbar({
  onOpenAddRegion, onOpenSearch, onOpenBookmarks,
  isLandscape, onToggleOrientation,
}: ToolbarProps) {
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-14 ${isDark ? 'glass' : 'glass-light'} border-b border-gold-400/10`}>
      <div className="h-full flex items-center justify-between px-4">
        {/* Left: Logo + Add Region */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-gold-400" />
            <span className="text-lg font-serif font-bold gold-text">史鉴</span>
          </div>

          <button
            onClick={onOpenAddRegion}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold-400/40 text-gold-400 text-sm font-medium hover:bg-gold-400/10 hover:border-gold-400/60 hover:shadow-[0_0_15px_rgba(201,169,110,0.2)] transition-all duration-300 active:scale-95"
          >
            <BookOpen className="w-4 h-4" />
            <Plus className="w-3 h-3" />
            <span>添加事件</span>
          </button>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-md mx-4">
          <button
            onClick={onOpenSearch}
            className={`w-full flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm transition-all duration-300 ${
              isDark
                ? 'bg-dark-100/60 border border-gold-400/10 text-gray-500 hover:border-gold-400/30'
                : 'bg-white/60 border border-gold-400/20 text-gray-400 hover:border-gold-400/40'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>搜索历史事件...</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleOrientation}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark ? 'text-gray-400 hover:text-gold-400 hover:bg-gold-400/10' : 'text-gray-500 hover:text-gold-500 hover:bg-gold-400/5'
            }`}
            title={isLandscape ? '切换竖屏' : '切换横屏'}
          >
            <Monitor className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBookmarks}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark ? 'text-gray-400 hover:text-gold-400 hover:bg-gold-400/10' : 'text-gray-500 hover:text-gold-500 hover:bg-gold-400/5'
            }`}
            title="收藏夹"
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark ? 'text-gray-400 hover:text-gold-400 hover:bg-gold-400/10' : 'text-gray-500 hover:text-gold-500 hover:bg-gold-400/5'
            }`}
            title={isDark ? '切换亮色' : '切换暗色'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User */}
          <div className="relative ml-1">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-300 ${
                isDark ? 'text-gray-400 hover:text-gold-400 hover:bg-gold-400/10' : 'text-gray-500 hover:text-gold-500 hover:bg-gold-400/5'
              }`}
            >
              <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-gold-400" />
              </div>
              <span className="text-xs max-w-[60px] truncate">{user?.username}</span>
            </button>

            {showUserMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                <div className={`absolute right-0 top-full mt-1 w-36 rounded-lg py-1 z-50 animate-scale-in ${
                  isDark ? 'glass border-gold-400/20' : 'glass-light border-gold-400/30'
                }`}>
                  <button
                    onClick={() => { logout(); setShowUserMenu(false) }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                      isDark ? 'text-gray-300 hover:text-red-400 hover:bg-red-400/10' : 'text-gray-600 hover:text-red-500 hover:bg-red-400/5'
                    }`}
                  >
                    <LogOut className="w-4 h-4" />
                    退出登录
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
