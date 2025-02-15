/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react-native'
import { View } from 'react-native'
import ThreeDShapes from '../../../../../../src/modules/threeD/components/3d/ThreeDShapes'

jest.mock('../../../../../../src/modules/threeD/components/3d/Cube', () => () => (
  <View testID="cube" />
))
jest.mock('../../../../../../src/modules/threeD/components/3d/Dodecahedron', () => () => (
  <View testID="dodecahedron" />
))
jest.mock('../../../../../../src/modules/threeD/components/3d/Cone', () => () => (
  <View testID="cone" />
))

jest.mock('../../../../../../src/modules/threeD/controllers/ShapeController', () => ({
  useShapeController: jest.fn(),
}))

describe('ThreeDShapes Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve renderizar o Cube quando shape for "cube"', () => {
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'cube',
        color: 'blue',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { getByTestId } = render(<ThreeDShapes />)
    expect(getByTestId('cube')).toBeTruthy()
  })

  it('deve renderizar o Dodecahedron quando shape for "dodecahedron"', () => {
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'dodecahedron',
        color: 'red',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { getByTestId } = render(<ThreeDShapes />)
    expect(getByTestId('dodecahedron')).toBeTruthy()
  })

  it('deve renderizar o Cone quando shape for "cone"', () => {
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'cone',
        color: 'green',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { getByTestId } = render(<ThreeDShapes />)
    expect(getByTestId('cone')).toBeTruthy()
  })

  it('não deve renderizar nenhuma forma quando shape for inválido', () => {
    require('../../../../../../src/modules/threeD/controllers/ShapeController').useShapeController.mockReturnValue(
      {
        shape: 'invalid',
        color: 'yellow',
        rotation: [0, 0, 0],
        size: 1,
      },
    )

    const { queryByTestId } = render(<ThreeDShapes />)
    expect(queryByTestId('cube')).toBeNull()
    expect(queryByTestId('dodecahedron')).toBeNull()
    expect(queryByTestId('cone')).toBeNull()
  })
})
