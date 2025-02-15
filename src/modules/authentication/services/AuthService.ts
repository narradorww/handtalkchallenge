import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth'
import { auth } from '../../../services/firebaseConfig'

class AuthService {
  async login(email: string, password: string): Promise<UserCredential> {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed')
    }
  }

  async register(email: string, password: string): Promise<UserCredential> {
    try {
      return await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Registration failed')
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(auth)
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Logout failed')
    }
  }
}

export default new AuthService()
