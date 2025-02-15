import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import AuthService from '../services/AuthService'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  const { user, loading } = context

  const login = async (email: string, password: string) => {
    await AuthService.login(email, password)
  }

  const register = async (email: string, password: string) => {
    await AuthService.register(email, password)
  }

  const logout = async () => {
    await AuthService.logout()
  }

  return { user, loading, login, register, logout }
}
