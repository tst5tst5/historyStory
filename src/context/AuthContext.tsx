import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import type { User } from '../types'
import { accounts } from '../data/accounts'

interface AuthContextType {
  user: User | null
  login: (type: 'phone' | 'email', account: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = sessionStorage.getItem('history_user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) {
      sessionStorage.setItem('history_user', JSON.stringify(user))
    } else {
      sessionStorage.removeItem('history_user')
    }
  }, [user])

  const login = useCallback((type: 'phone' | 'email', account: string, password: string) => {
    const found = accounts.find((a) => {
      if (type === 'phone' && a.phone === account && a.password === password) return true
      if (type === 'email' && a.email === account && a.password === password) return true
      return false
    })
    if (found) {
      setUser(found.user)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
