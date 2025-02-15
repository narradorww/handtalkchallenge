import React, { createContext, useEffect, useState } from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../services/firebaseConfig'
import AuthService from '../services/AuthService'

interface AuthContextProps {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
      setUser(firebaseUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
      setUser(firebaseUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email: string, password: string) => {
    await AuthService.login(email, password)
  }

  const logout = async () => {
    await AuthService.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
  )
}
