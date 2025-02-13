import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { AccessibilityInfo, StyleProp, View, ViewStyle } from 'react-native'
import { useShapeController } from '../controllers/ShapeController'

interface CanvasWrapperProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  sceneDescription?: string
  testID?: string
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({
  children,
  style,
  sceneDescription,
  testID = 'canvas-wrapper',
}) => {
  const { backgroundColor } = useShapeController()
  useEffect(() => {
    if (sceneDescription) {
      AccessibilityInfo.announceForAccessibility(sceneDescription)
    }
  }, [sceneDescription])

  return (
    <View
      testID={testID}
      style={[{ flex: 1 }, style]}
      accessible
      accessibilityLabel={sceneDescription || 'Cena 3D renderizada'}
      accessibilityRole="image"
    >
      <Canvas
        frameloop="always"
        gl={{
          powerPreference: 'high-performance',
          antialias: true,
          stencil: false,
          depth: false,
          alpha: false,
        }}
        camera={{ position: [0, 0, 3], fov: 50 }}
        performance={{ min: 0.8 }}
      >
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={20} />
        {children}
      </Canvas>
    </View>
  )
}

export default CanvasWrapper
