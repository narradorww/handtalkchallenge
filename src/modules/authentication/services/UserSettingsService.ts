import { ref, set, get } from 'firebase/database'
import { db } from '../../../services/firebaseConfig'
import { UserSettings } from '../models/UserSettings'

class UserSettingsService {
  static async saveUserSettings(userId: string, settings: UserSettings): Promise<void> {
    if (!userId) throw new Error('User ID is required to save settings')
    const settingsRef = ref(db, `users/${userId}/settings`)
    await set(settingsRef, settings)
  }

  static async loadUserSettings(userId: string): Promise<UserSettings | null> {
    if (!userId) throw new Error('User ID is required to load settings')
    const settingsRef = ref(db, `users/${userId}/settings`)
    const snapshot = await get(settingsRef)
    return snapshot.exists() ? snapshot.val() : null
  }
}

export default UserSettingsService
