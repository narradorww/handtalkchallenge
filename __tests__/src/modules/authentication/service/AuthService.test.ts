import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import AuthService from '../../../../../src/modules/authentication/services/AuthService'
import { auth } from '../../../../../src/services/firebaseConfig'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({})), // Mock do getAuth
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
}))

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
}))

describe('AuthService', () => {
  const mockEmail = 'test@example.com'
  const mockPassword = 'password123'

  afterEach(() => {
    jest.clearAllMocks() // Limpa os mocks após cada teste
  })

  describe('login', () => {
    test('should call signInWithEmailAndPassword with correct parameters', async () => {
      // Mock da função para retornar um valor simulado
      ;(signInWithEmailAndPassword as jest.Mock).mockResolvedValue({
        user: { email: mockEmail },
      })

      await AuthService.login(mockEmail, mockPassword)

      // Verifica se a função do Firebase foi chamada corretamente
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, mockEmail, mockPassword)
    })

    test('should throw an error when signInWithEmailAndPassword fails', async () => {
      // Mock da função para simular um erro
      ;(signInWithEmailAndPassword as jest.Mock).mockRejectedValue(new Error('Invalid credentials'))

      // Verifica se o erro é lançado corretamente
      await expect(AuthService.login(mockEmail, mockPassword)).rejects.toThrow(
        'Invalid credentials',
      )
    })
  })

  describe('register', () => {
    test('should call createUserWithEmailAndPassword with correct parameters', async () => {
      // Mock da função para retornar um valor simulado
      ;(createUserWithEmailAndPassword as jest.Mock).mockResolvedValue({
        user: { email: mockEmail },
      })

      await AuthService.register(mockEmail, mockPassword)

      // Verifica se a função do Firebase foi chamada corretamente
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, mockEmail, mockPassword)
    })

    test('should throw an error when createUserWithEmailAndPassword fails', async () => {
      // Mock da função para simular um erro
      ;(createUserWithEmailAndPassword as jest.Mock).mockRejectedValue(
        new Error('Registration failed'),
      )

      // Verifica se o erro é lançado corretamente
      await expect(AuthService.register(mockEmail, mockPassword)).rejects.toThrow(
        'Registration failed',
      )
    })
  })

  describe('logout', () => {
    test('should call signOut with correct parameters', async () => {
      // Mock da função para retornar um valor simulado
      ;(signOut as jest.Mock).mockResolvedValue(undefined)

      await AuthService.logout()

      // Verifica se a função do Firebase foi chamada corretamente
      expect(signOut).toHaveBeenCalledWith(auth)
    })

    test('should throw an error when signOut fails', async () => {
      // Mock da função para simular um erro
      ;(signOut as jest.Mock).mockRejectedValue(new Error('Logout failed'))

      // Verifica se o erro é lançado corretamente
      await expect(AuthService.logout()).rejects.toThrow('Logout failed')
    })
  })
})
