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
      console.log('📡 [Salvando Configurações] Caminho:', `users/${user.uid}/settings`)
      await set(ref(db, `users/${user.uid}/settings`), settings)
      console.log('✅ [Sucesso] Configurações salvas!')
    } catch (error) {
      console.error('❌ [Erro ao salvar configurações]', error)
    }
  }

  async loadUserSettings(): Promise<UserSettings | null> {
    const user = auth.currentUser
    if (!user) {
      console.error('❌ Nenhum usuário autenticado.')
      return null
    }

    try {
      console.log('📡 [Carregando Configurações] Caminho:', `users/${user.uid}/settings`)
      const snapshot = await get(child(ref(db), `users/${user.uid}/settings`))

      if (snapshot.exists()) {
        console.log('✅ [Sucesso] Configurações carregadas:', snapshot.val())
        return snapshot.val() as UserSettings
      } else {
        console.warn('⚠️ [Aviso] Nenhuma configuração encontrada.')
        return null
      }
    } catch (error) {
      console.error('❌ [Erro ao carregar configurações]', error)
      return null
    }
  }
}

export default new UserSettingsService()
