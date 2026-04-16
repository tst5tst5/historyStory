import { useState } from 'react'
import type { ReactNode } from 'react'
import { ChevronLeft, ChevronRight, PanelLeftClose } from 'lucide-react'

interface LayoutProps {
  isLandscape: boolean
  toolbar: ReactNode
  regionPanel: ReactNode
  timeline: ReactNode
}

export default function Layout({ isLandscape, toolbar, regionPanel, timeline }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  if (isLandscape) {
    return (
      <div className="min-h-screen flex flex-col">
        {toolbar}
        <div className="flex flex-1 pt-14" style={{ transition: 'all 0.3s ease' }}>
          <aside
            className={`flex-shrink-0 overflow-y-auto border-r border-gold-400/10 relative ${collapsed ? 'w-9' : 'w-[260px]'}`}
            style={{ transition: 'all 0.3s ease' }}
          >
            {/* 折叠/展开按钮 */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className={`absolute top-2 ${collapsed ? '-right-3' : 'right-2'} z-20 p-1 rounded-full shadow-md transition-all duration-200 ${
                collapsed
                  ? 'bg-gold-500 text-white hover:bg-gold-600'
                  : 'bg-gold-400/15 text-gold-400 hover:bg-gold-400/25'
              }`}
              title={collapsed ? "展开侧栏" : "收起侧栏"}
            >
              {collapsed ? (
                <ChevronLeft className="w-4 h-4 rotate-180" />
              ) : (
                <PanelLeftClose className="w-4 h-4" />
              )}
            </button>
            
            {!collapsed ? regionPanel : null}
          </aside>
          <main className="flex-1 overflow-hidden">
            {timeline}
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {toolbar}
      <div className="flex flex-col flex-1 pt-14" style={{ transition: 'all 0.3s ease' }}>
        <div className="flex-shrink-0 border-b border-gold-400/10" style={{ transition: 'all 0.3s ease' }}>
          {regionPanel}
        </div>
        <main className="flex-1 overflow-hidden">
          {timeline}
        </main>
      </div>
    </div>
  )
}
