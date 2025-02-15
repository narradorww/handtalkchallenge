/* eslint-disable no-console */
import { getDatabase, ref, set, get, child } from 'firebase/database'
import { auth } from '../../../services/firebaseConfig'

const db = getDatabase()

interface UserSettings {
  shape: 'cube' | 'dodecahedron' | 'cone'
  color: string
  rotation: [number, number, number]
  size: number
  backgroundColor: string
}

class UserSettingsService {
  async saveUserSettings(settings: UserSettings): Promise<void> {
    const user = auth.currentUser
    if (!user) {
      console.error('❌ Nenhum usuário autenticado.')
      return
    }

    try {
      await set(ref(db, `users/${user.uid}/settings`), settings)
    } catch (error) {
      throw new Error('Falha ao salvar configurações do usuário: ' + error)
    }
  }

  async loadUserSettings(): Promise<UserSettings | null> {
    const user = auth.currentUser
    if (!user) {
      console.error('❌ Nenhum usuário autenticado.')
      return null
    }

    try {
      const snapshot = await get(child(ref(db), `users/${user.uid}/settings`))

      if (snapshot.exists()) {
        return snapshot.val() as UserSettings
      } else {
        return null
      }
    } catch (error: unknown) {
      console.error('❌ Erro ao carregar configurações do usuário:', error)
      return null
    }
  }
}

export default new UserSettingsService()
