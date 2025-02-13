import React from 'react'
import { render, screen } from '@testing-library/react-native'
import CanvasWrapper from '../../../../../src/modules/threeD/components/CanvasWrapper'
import { ShapeProvider } from '../../../../../src/modules/threeD/context/ShapeContext'

// Mock do Canvas para evitar erro de renderização no Jest
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="mock-canvas">{children}</div>,
}))

describe('CanvasWrapper Component', () => {
  it('should render the CanvasWrapper', () => {
    render(
      <ShapeProvider>
        <CanvasWrapper sceneDescription="Cena 3D">
          <div />
        </CanvasWrapper>
      </ShapeProvider>,
    )

    const canvasWrapper = screen.getByTestId('canvas-wrapper')
    expect(canvasWrapper).toBeTruthy()
  })
})
