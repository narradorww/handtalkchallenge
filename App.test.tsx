// tests/App.test.tsx
import React from 'react'

import { render, screen } from '@testing-library/react-native'

import App from './App'

describe('App Component', () => {
  it('should render the "Hello,  World!" text', () => {
    render(<App />)

    const helloWorldText = screen.getByText('Hello, World! 🚀')
    expect(helloWorldText).toBeDefined()
  })
})
