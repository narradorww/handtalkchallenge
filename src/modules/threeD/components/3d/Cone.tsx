import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber/native'
import { AccessibilityInfo } from 'react-native'
import { Mesh, Color } from 'three'

interface ConeProps {
  radius?: number
  height?: number
  color?: string
  position?: [number, number, number]
  rotation?: [number, number, number]
  sceneDescription?: string
  testID?: string
}

const Cone: React.FC<ConeProps> = ({
  radius = 0.5,
  height = 1,
  color = '#FFA500',
  position = [0, 0, 0],
  rotation = [0.01, 0.01, 0.01],
  sceneDescription = 'Cone 3D',
  testID = 'mesh-cone',
}) => {
  const meshRef = useRef<Mesh>(null)

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(sceneDescription)
  }, [sceneDescription])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotation[0] * delta
      meshRef.current.rotation.y += rotation[1] * delta
      meshRef.current.rotation.z += rotation[2] * delta
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[radius, height, 16]} />
      <meshStandardMaterial color={new Color(color)} />
    </mesh>
  )
}

export default Cone
