/* eslint-disable no-console */
import { getDatabase, ref, set, get, child } from 'firebase/database'
import { auth } from '../../../services/firebaseConfig'

const db = getDatabase()

interface ShapeSettings {
  color: string
  rotation: [number, number, number]
  size: number
  backgroundColor: string
}

class UserSettingsService {
  async saveShapeSettings(
    shape: 'cube' | 'dodecahedron' | 'cone',
    settings: ShapeSettings,
  ): Promise<void> {
    const user = auth.currentUser
    if (!user) {
      return
    }

    try {
      const path = `users/${user.uid}/settings/${shape}`

      await set(ref(db, path), settings)
    } catch (error) {
      console.error('❌ [Erro ao salvar configuração]', error)
    }
  }

  async loadShapeSettings(shape: 'cube' | 'dodecahedron' | 'cone'): Promise<ShapeSettings | null> {
    const user = auth.currentUser
    if (!user) {
      return null
    }

    try {
      const path = `users/${user.uid}/settings/${shape}`

      const snapshot = await get(child(ref(db), path))

      if (snapshot.exists()) {
        return snapshot.val() as ShapeSettings
      } else {
        return null
      }
    } catch (erro) {
      console.error('❌ [Erro ao carregar configuração]', erro)
      return null
    }
  }
}

export default new UserSettingsService()
