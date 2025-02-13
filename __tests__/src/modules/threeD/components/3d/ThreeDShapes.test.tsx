import React from 'react'
import { render } from '@testing-library/react-native'
import ThreeDShapes from '../../../../../../src/modules/threeD/components/3d/ThreeDShapes'

// Mock dos componentes 3D com testID
jest.mock('../../../../../../src/modules/threeD/components/3d/Cube', () => () => (
  <mock-cube testID="cube" />
))
jest.mock('../../../../../../src/modules/threeD/components/3d/Dodecahedron', () => () => (
  <mock-dodecahedron testID="dodecahedron" />
))
jest.mock('../../../../../../src/modules/threeD/components/3d/Cone', () => () => (
  <mock-cone testID="cone" />
))

// Mock do useShapeController
jest.mock('../../../../../../src/modules/threeD/controllers/ShapeController', () => ({
  useShapeController: jest.fn(),
}))

describe('ThreeDShapes Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve renderizar o Cube quando shape for "cube"', () => {
    // Configura o mock para retornar "cube"
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'cube',
        color: 'blue',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { getByTestId } = render(<ThreeDShapes />)
    expect(getByTestId('cube')).toBeTruthy() // Verifica se o Cube foi renderizado
  })

  it('deve renderizar o Dodecahedron quando shape for "dodecahedron"', () => {
    // Configura o mock para retornar "dodecahedron"
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'dodecahedron',
        color: 'red',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { getByTestId } = render(<ThreeDShapes />)
    expect(getByTestId('dodecahedron')).toBeTruthy() // Verifica se o Dodecahedron foi renderizado
  })

  it('deve renderizar o Cone quando shape for "cone"', () => {
    // Configura o mock para retornar "cone"
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'cone',
        color: 'green',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { getByTestId } = render(<ThreeDShapes />)
    expect(getByTestId('cone')).toBeTruthy() // Verifica se o Cone foi renderizado
  })

  it('não deve renderizar nenhuma forma quando shape for inválido', () => {
    // Configura o mock para retornar um shape inválido
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'invalid',
        color: 'yellow',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { queryByTestId } = render(<ThreeDShapes />)
    expect(queryByTestId('cube')).toBeNull() // Nenhum Cube deve ser renderizado
    expect(queryByTestId('dodecahedron')).toBeNull() // Nenhum Dodecahedron deve ser renderizado
    expect(queryByTestId('cone')).toBeNull() // Nenhum Cone deve ser renderizado
  })
})
