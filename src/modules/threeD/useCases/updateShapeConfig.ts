import { database } from '../../../services/firebase'
import { useShapeContext } from '../context/ShapeContext'

export const saveShapeConfig = async (userId: string) => {
  const { shape, color, rotation } = useShapeContext()

  try {
    await database.ref(`users/${userId}/shapeConfig`).set({
      shape,
      color,
      rotation,
    })
  } catch (error) {
    console.error('Erro ao salvar configuração do shape:', error)
  }
}

export const loadShapeConfig = async (userId: string) => {
  const { setShape, setColor, setRotation } = useShapeContext()

  try {
    const snapshot = await database.ref(`users/${userId}/shapeConfig`).once('value')
    if (snapshot.exists()) {
      const data = snapshot.val()
      setShape(data.shape)
      setColor(data.color)
      setRotation(data.rotation)
    }
  } catch (error) {
    console.error('Erro ao carregar configuração do shape:', error)
  }
}
