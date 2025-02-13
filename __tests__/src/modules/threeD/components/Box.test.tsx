import React from 'react'
import { render } from '@testing-library/react-native'
import Box from '../../../../../src/modules/threeD/components/Box'

// Mock do Three.js
jest.mock('three', () => ({
  Mesh: jest.fn().mockImplementation(() => ({
    rotation: { x: 0, y: 0 },
  })),
}))

// Mock do @react-three/fiber
jest.mock('@react-three/fiber', () => ({
  useFrame: jest.fn(),
}))

describe('Box component', () => {
  it('should render with default props', () => {
    const { getByTestId } = render(<Box color="red" />)

    // Verifica se o componente foi renderizado
    const meshElement = getByTestId('box-mesh')
    expect(meshElement).toBeTruthy()
  })

  it('should render with custom props', () => {
    const position = [1, 2, 3]
    const rotationSpeed = 2
    const color = 'blue'

    const { getByTestId } = render(
      <Box color={color} position={position} rotationSpeed={rotationSpeed} />,
    )

    // Verifica se o componente foi renderizado
    const meshElement = getByTestId('box-mesh')
    expect(meshElement).toBeTruthy()
  })

  it('should handle missing props', () => {
    const { getByTestId } = render(<Box color="green" />)

    // Verifica se o componente foi renderizado
    const meshElement = getByTestId('box-mesh')
    expect(meshElement).toBeTruthy()
  })
})
