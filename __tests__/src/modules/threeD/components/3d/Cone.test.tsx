import React from 'react'
import { render } from '@testing-library/react-native'
import { AccessibilityInfo } from 'react-native'
import Cone from '../../../../../../src/modules/threeD/components/3d/Cone'

jest.mock('three', () => ({
  Mesh: jest.fn(),
  Color: jest.fn(),
}))

jest.mock('@react-three/fiber/native', () => ({
  useFrame: jest.fn(),
}))

jest.mock('react-native', () => ({
  AccessibilityInfo: {
    announceForAccessibility: jest.fn(),
  },
}))

describe('Cone - Testes de Acessibilidade', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve anunciar a descrição da cena', () => {
    render(<Cone sceneDescription="Descrição do cone" />)
    expect(AccessibilityInfo.announceForAccessibility).toHaveBeenCalledWith('Descrição do cone')
  })

  it('deve usar a descrição padrão se não for fornecida', () => {
    render(<Cone />)
    expect(AccessibilityInfo.announceForAccessibility).toHaveBeenCalledWith('Cone 3D')
  })
})
