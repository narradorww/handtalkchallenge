import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)
