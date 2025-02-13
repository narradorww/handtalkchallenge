import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { AccessibilityInfo, StyleProp, View, ViewStyle } from 'react-native'

interface CanvasWrapperProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  sceneDescription?: string
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ children, style, sceneDescription }) => {
  useEffect(() => {
    if (sceneDescription) {
      AccessibilityInfo.announceForAccessibility(sceneDescription)
    }
  }, [sceneDescription])

  return (
    <View
      style={[{ flex: 1 }, style]}
      accessible
      accessibilityLabel={sceneDescription || 'Cena 3D renderizada'}
      accessibilityRole="image"
    >
      <Canvas
        gl={{
          powerPreference: 'high-performance',
          antialias: true,
          stencil: false,
          depth: false,
        }}
        camera={{ position: [0, 0, 2], fov: 50 }}
      >
        {children}
      </Canvas>
    </View>
  )
}

export default CanvasWrapper
