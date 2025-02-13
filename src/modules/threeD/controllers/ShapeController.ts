import { useShapeContext } from '../context/ShapeContext'

export const useShapeController = () => {
  const {
    shape,
    color,
    rotation,
    size,
    backgroundColor,
    setShape,
    setColor,
    setRotation,
    setSize,
    setBackgroundColor,
  } = useShapeContext()

  const updateShape = (newShape: 'cube' | 'dodecahedron' | 'cone') => setShape(newShape)
  const updateColor = (newColor: string) => setColor(newColor)
  const updateRotation = (newRotation: [number, number, number]) => setRotation(newRotation)
  const updateSize = (newSize: number) => setSize(newSize)
  const updateBackgroundColor = (newColor: string) => setBackgroundColor(newColor)

  return {
    shape,
    color,
    rotation,
    size,
    backgroundColor,
    updateShape,
    updateColor,
    updateRotation,
    updateSize,
    updateBackgroundColor,
  }
}
