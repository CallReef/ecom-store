'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '@/lib/api'

interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  role: string
  is_active: boolean
  created_at: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (username: string, password: string) => Promise<void>
  register: (userData: {
    username: string
    email: string
    password: string
    first_name: string
    last_name: string
  }) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  const fetchUser = async () => {
    try {
      console.log('AuthContext: Fetching user data...')
      const response = await authAPI.getMe()
      console.log('AuthContext: User data received:', response.data)
      setUser(response.data)
    } catch (error) {
      console.error('AuthContext: Error fetching user:', error)
      localStorage.removeItem('access_token')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    // Only run on client side after component is mounted
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token')
      if (token) {
        fetchUser()
      } else {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [])

  // Don't render anything until mounted on client side
  if (!mounted) {
    return <>{children}</>
  }

  const login = async (username: string, password: string) => {
    try {
      console.log('AuthContext: Starting login for', username)
      const response = await authAPI.login({ username, password })
      console.log('AuthContext: Login API response received')
      const { access_token } = response.data
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', access_token)
      }
      console.log('AuthContext: Token stored, fetching user...')
      await fetchUser()
      console.log('AuthContext: User fetched successfully')
    } catch (error: any) {
      console.error('AuthContext: Login error:', error)
      throw error
    }
  }

  const register = async (userData: {
    username: string
    email: string
    password: string
    first_name: string
    last_name: string
  }) => {
    await authAPI.register(userData)
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token')
    }
    setUser(null)
  }

  const updateUser = async (userData: Partial<User>) => {
    const response = await authAPI.updateMe(userData)
    setUser(response.data)
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
