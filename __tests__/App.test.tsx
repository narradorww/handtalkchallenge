import React from 'react'
import { render, screen } from '@testing-library/react-native'
import App from '../App'

// Mock do useFrame e Canvas
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div>{children}</div>, // Mock do Canvas
  useFrame: jest.fn(), // Mock do useFrame
}))

describe('App Component', () => {
  it('should render the "Hello, World!" text', () => {
    // Renderiza o componente App
    render(<App />)

    // Verifica se o texto "Hello, World! 🚀" está presente
    const helloWorldText = screen.getByText('Hello, World! 🚀')
    expect(helloWorldText).toBeDefined()
  })
})
