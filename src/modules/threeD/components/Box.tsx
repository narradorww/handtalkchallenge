import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface BoxProps {
  color: string
  position?: [number, number, number]
  rotationSpeed?: number
}

const Box: React.FC<BoxProps> = ({ color, position = [0, 0, 0], rotationSpeed = 1 }) => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed
      meshRef.current.rotation.y += delta * rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position} testID="box-mesh">
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Box
