import React from 'react'
import { render } from '@testing-library/react-native'
import { AccessibilityInfo } from 'react-native'
import Dodecahedron from '../../../../../../src/modules/threeD/components/3d/Dodecahedron'

// Mock mínimo necessário
jest.mock('three', () => ({
  Mesh: jest.fn(),
  Color: jest.fn(),
  DodecahedronGeometry: jest.fn(),
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

describe('Dodecahedron - Testes de Acessibilidade', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve anunciar a descrição da cena', () => {
    render(<Dodecahedron sceneDescription="Descrição do dodecaedro" />)
    expect(AccessibilityInfo.announceForAccessibility).toHaveBeenCalledWith(
      'Descrição do dodecaedro',
    )
  })

  it('deve usar a descrição padrão se não for fornecida', () => {
    render(<Dodecahedron />)
    expect(AccessibilityInfo.announceForAccessibility).toHaveBeenCalledWith('Dodecaedro 3D')
  })
})
