import React from 'react'
import { render } from '@testing-library/react-native'
import { View } from 'react-native'
import CanvasWrapper from '../../../../../src/modules/threeD/components/CanvasWrapper'

jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <View testID="mock-canvas">{children}</View>
  ),
}))

jest.mock('../../../../../src/modules/threeD/controllers/ShapeController', () => ({
  useShapeController: () => ({
    backgroundColor: '#ffffff', // Cor de fundo mockada
  }),
}))

describe('CanvasWrapper', () => {
  it('deve renderizar o cenario corretamente', () => {
    const { getByTestId } = render(
      <CanvasWrapper sceneDescription="Test scene">
        <View testID="test-child" />
      </CanvasWrapper>,
    )

    expect(getByTestId('mock-canvas')).toBeTruthy()

    expect(getByTestId('test-child')).toBeTruthy()

    expect(getByTestId('canvas-wrapper')).toBeTruthy()
  })
})
