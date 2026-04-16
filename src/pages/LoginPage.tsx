import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { BookOpen, Phone, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react'
import type { LoginType } from '../types'

export default function LoginPage() {
  const { login } = useAuth()
  const { isDark } = useTheme()
  const [loginType, setLoginType] = useState<LoginType>('phone')
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!account || !password) {
      setError('请输入账号和密码')
      return
    }
    const success = login(loginType, account, password)
    if (!success) {
      setError('账号或密码错误')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'dark-bg' : 'parchment-bg'}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
            <BookOpen className="w-8 h-8 text-gold-400" />
          </div>
          <h1 className="text-4xl font-serif font-bold gold-text mb-2">史鉴</h1>
          <p className={`text-sm ${isDark ? 'text-gold-400/60' : 'text-gold-600/60'}`}>
            以史为鉴，可以知兴替
          </p>
        </div>

        {/* Login Card */}
        <div className={`rounded-2xl p-8 ${isDark ? 'glass' : 'glass-light'} animate-scale-in`}>
          {/* Tabs */}
          <div className="flex mb-6 rounded-lg overflow-hidden border border-gold-400/20">
            <button
              onClick={() => { setLoginType('phone'); setAccount(''); setError('') }}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                loginType === 'phone'
                  ? 'bg-gold-400/20 text-gold-400'
                  : isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              手机号登录
            </button>
            <button
              onClick={() => { setLoginType('email'); setAccount(''); setError('') }}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 border-l border-gold-400/20 ${
                loginType === 'email'
                  ? 'bg-gold-400/20 text-gold-400'
                  : isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
              }`}
            >
              <Mail className="w-4 h-4" />
              邮箱登录
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-gold-400/70' : 'text-gold-600/70'}`}>
                {loginType === 'phone' ? '手机号码' : '邮箱地址'}
              </label>
              <input
                type={loginType === 'phone' ? 'tel' : 'email'}
                value={account}
                onChange={(e) => { setAccount(e.target.value); setError('') }}
                onKeyDown={handleKeyDown}
                placeholder={loginType === 'phone' ? '请输入手机号码' : '请输入邮箱地址'}
                className={`w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 outline-none ${
                  isDark
                    ? 'bg-dark-100/60 border border-gold-400/20 text-parchment-100 placeholder-gray-500 focus:border-gold-400/50 focus:bg-dark-100'
                    : 'bg-white/60 border border-gold-400/30 text-dark-200 placeholder-gray-400 focus:border-gold-500/50 focus:bg-white'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-gold-400/70' : 'text-gold-600/70'}`}>
                密码
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError('') }}
                  onKeyDown={handleKeyDown}
                  placeholder="请输入密码"
                  className={`w-full px-4 py-3 pr-10 rounded-lg text-sm transition-all duration-300 outline-none ${
                    isDark
                      ? 'bg-dark-100/60 border border-gold-400/20 text-parchment-100 placeholder-gray-500 focus:border-gold-400/50 focus:bg-dark-100'
                      : 'bg-white/60 border border-gold-400/30 text-dark-200 placeholder-gray-400 focus:border-gold-500/50 focus:bg-white'
                  }`}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500 hover:text-gold-400' : 'text-gray-400 hover:text-gold-500'} transition-colors`}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-xs animate-fade-in">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-dark-200 font-medium text-sm flex items-center justify-center gap-2 hover:from-gold-400 hover:to-gold-300 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-[0.98]"
            >
              登录
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dev hint */}
          <div className={`mt-6 p-3 rounded-lg text-xs ${isDark ? 'bg-dark-100/40 text-gold-400/50' : 'bg-gold-400/5 text-gold-600/50'}`}>
            <p className="font-medium mb-1">开发测试账号：</p>
            <p>手机号：13800138000 / 邮箱：learner@history.com</p>
            <p>密码：history2024</p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 text-center">
          <p className={`text-xs italic ${isDark ? 'text-gold-400/30' : 'text-gold-600/30'}`}>
            "读史使人明智" —— 弗朗西斯·培根
          </p>
        </div>
      </div>
    </div>
  )
}
