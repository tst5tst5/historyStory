import { useState, Component, type ReactNode, type ErrorInfo } from 'react'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { RegionProvider } from './context/RegionContext'
import { CategoryProvider } from './context/CategoryContext'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { useAuth } from './context/AuthContext'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null; errorInfo: ErrorInfo | null }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { error, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App crashed:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          position: 'fixed', inset: 0,
          background: '#1a1a2e',
          color: '#f5f5dc',
          padding: '40px',
          overflow: 'auto',
          fontFamily: 'monospace',
          zIndex: 99999
        }}>
          <h2 style={{ color: '#DC143C' }}>页面渲染出错</h2>
          <p style={{ color: '#FFD700', fontSize: '18px', marginTop: 16 }}>
            {this.state.error.message}
          </p>
          <details style={{ marginTop: 20, whiteSpace: 'pre-wrap', color: '#ccc', fontSize: 12 }}>
            <summary style={{ cursor: 'pointer', marginBottom: 10 }}>堆栈跟踪</summary>
            {this.state.error.stack}
          </details>
          {this.state.errorInfo && (
            <details style={{ marginTop: 10, whiteSpace: 'pre-wrap', color: '#ccc', fontSize: 12 }}>
              <summary style={{ cursor: 'pointer', marginBottom: 10 }}>组件堆栈</summary>
              {this.state.errorInfo.componentStack}
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 24,
              padding: '8px 24px',
              background: '#D4AF37',
              color: '#1a1a1a',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            刷新页面
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

function AppContent() {
  const { user } = useAuth()
  return user ? <HomePage /> : <LoginPage />
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <RegionProvider>
            <CategoryProvider>
              <AppContent />
            </CategoryProvider>
          </RegionProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
