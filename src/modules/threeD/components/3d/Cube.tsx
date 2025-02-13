import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber/native'
import { AccessibilityInfo } from 'react-native'
import { Mesh, Color } from 'three'

interface CubeProps {
  size?: number
  color?: string
  position?: [number, number, number]
  rotation?: [number, number, number]
  sceneDescription?: string
  testID?: string
}

const Cube: React.FC<CubeProps> = ({
  size = 0.3,
  color = '#FFA500',
  position = [0, 0, 0],
  rotation = [1, 1, 1],
  sceneDescription = 'Cubo 3D',
  testID = 'cube-mesh',
}) => {
  const meshRef = useRef<Mesh>(null)

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(sceneDescription)
  }, [sceneDescription])

  useFrame((state, delta) => {
    if (meshRef.current) {
      // console.log('Rotation values:', meshRef.current.rotation)
      meshRef.current.rotation.x += rotation[0] * delta
      meshRef.current.rotation.y += rotation[1] * delta
      meshRef.current.rotation.z += rotation[2] * delta
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={new Color(color)} />
    </mesh>
  )
}

export default Cube
