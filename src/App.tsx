import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { RegionProvider } from './context/RegionContext'
import { CategoryProvider } from './context/CategoryContext'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { useAuth } from './context/AuthContext'

function AppContent() {
  const { user } = useAuth()
  return user ? <HomePage /> : <LoginPage />
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RegionProvider>
          <CategoryProvider>
            <AppContent />
          </CategoryProvider>
        </RegionProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
