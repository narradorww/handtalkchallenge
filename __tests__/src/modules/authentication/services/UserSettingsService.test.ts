import { ref, set, get } from 'firebase/database'
import { UserSettings } from '../../../../../src/modules/authentication/models/UserSettings'
import UserSettingsService from '../../../../../src/modules/authentication/services/UserSettingsService'
import { db } from '../../../../../src/services/firebaseConfig'

jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  set: jest.fn(),
  get: jest.fn(),
}))

describe('UserSettingsService', () => {
  const mockUserId = 'testUser123'

  const testSettings: UserSettings = {
    shape: 'cube',
    color: '#FF0000',
    rotation: [0.1, 0.1, 0.1],
    size: 1,
    backgroundColor: '#FFFFFF',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('deve salvar as configurações do usuário no Firebase', async () => {
    const mockRef = ref(db, `users/${mockUserId}/settings`)
    ;(set as jest.Mock).mockResolvedValue(undefined)

    await UserSettingsService.saveUserSettings(mockUserId, testSettings)

    expect(set).toHaveBeenCalledWith(mockRef, testSettings)
  })

  it('deve recuperar as configurações do usuário do Firebase', async () => {
    const mockRef = ref(db, `users/${mockUserId}/settings`)

    // 🔥 Ajuste aqui: Mockando `exists()` para evitar erro
    ;(get as jest.Mock).mockResolvedValue({
      exists: () => true, // Agora `exists()` retorna `true`
      val: () => testSettings, // E `val()` retorna os dados esperados
    })

    const loadedSettings = await UserSettingsService.loadUserSettings(mockUserId)

    expect(get).toHaveBeenCalledWith(mockRef)
    expect(loadedSettings).toEqual(testSettings)
  })
})
