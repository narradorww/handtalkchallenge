import { ref, set, get, child } from 'firebase/database'
import { UserSettings } from '../../../../../src/modules/authentication/models/UserSettings'
import UserSettingsService from '../../../../../src/modules/authentication/services/UserSettingsService'
import { db } from '../../../../../src/services/firebaseConfig'

// 🔥 Mock de Firebase
jest.mock('firebase/database', () => ({
  getDatabase: jest.fn(),
  ref: jest.fn(),
  set: jest.fn(),
  get: jest.fn(),
  child: jest.fn(),
}))

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    currentUser: { uid: 'testUser123' }, // 🔥 Mock corrigido
  })),
}))

describe('UserSettingsService', () => {
  const testSettings: UserSettings = {
    shape: 'cube', // 🔥 Valor fixo, evitando erro de tipagem
    color: '#FF0000',
    rotation: [0.1, 0.1, 0.1],
    size: 1,
    backgroundColor: '#FFFFFF',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('deve salvar as configurações do usuário no Firebase', async () => {
    const mockRef = ref(db, `users/testUser123/settings`)
    ;(set as jest.Mock).mockResolvedValue(undefined)

    await UserSettingsService.saveUserSettings(testSettings)

    expect(set).toHaveBeenCalledWith(mockRef, testSettings)
  })

  it('deve recuperar as configurações do usuário do Firebase', async () => {
    ;(get as jest.Mock).mockResolvedValue({
      exists: () => true,
      val: () => testSettings,
    })

    const loadedSettings = await UserSettingsService.loadUserSettings()

    expect(get).toHaveBeenCalledWith(child(ref(db), `users/testUser123/settings`))
    expect(loadedSettings).toEqual(testSettings)
  })
})
