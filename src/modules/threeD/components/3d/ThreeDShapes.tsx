import React from 'react'
import { Cube, Dodecahedron, Cone } from './index'
import { useShapeController } from '../../controllers/ShapeController'

const ThreeDShapes: React.FC = () => {
  const { shape, color, rotation, size } = useShapeController()

  return (
    <>
      {shape === 'cube' && (
        <Cube color={color} position={[0, 0, 0]} rotation={rotation} size={size} />
      )}
      {shape === 'dodecahedron' && (
        <Dodecahedron color={color} position={[0, 0, 0]} rotation={rotation} size={size} />
      )}
      {shape === 'cone' && (
        <Cone
          color={color}
          position={[0, 0, 0]}
          rotation={rotation}
          radius={size}
          height={size * 2}
        />
      )}
    </>
  )
}

export default ThreeDShapes
