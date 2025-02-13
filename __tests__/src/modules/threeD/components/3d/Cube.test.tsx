import React from 'react'
import { render } from '@testing-library/react-native'
import Cube from '../../../../../../src/modules/threeD/components/3d/Cube'
import { AccessibilityInfo } from 'react-native'

// Mock mínimo necessário
jest.mock('three', () => ({
  Mesh: jest.fn(),
  Color: jest.fn(),
  BoxGeometry: jest.fn(),
  MeshStandardMaterial: jest.fn(),
}))

jest.mock('@react-three/fiber/native', () => ({
  useFrame: jest.fn(),
}))

jest.mock('react-native', () => ({
  AccessibilityInfo: {
    announceForAccessibility: jest.fn(),
  },
}))

describe('Cube - Testes de Acessibilidade', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve anunciar a descrição da cena', () => {
    render(<Cube sceneDescription="Descrição do cubo" />)
    expect(AccessibilityInfo.announceForAccessibility).toHaveBeenCalledWith('Descrição do cubo')
  })

  it('deve usar a descrição padrão se não for fornecida', () => {
    render(<Cube />)
    expect(AccessibilityInfo.announceForAccessibility).toHaveBeenCalledWith('Cubo 3D')
  })
})
