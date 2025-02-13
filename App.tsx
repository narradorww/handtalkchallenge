import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Box from './src/modules/threeD/components/Box'
import CanvasWrapper from './src/modules/threeD/components/CanvasWrapper'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World! 🚀</Text>
      <CanvasWrapper
        testID="canvas-wrapper"
        style={styles.canvasContainer}
        sceneDescription="Cena 3D contendo um cubo giratório na cor laranja"
      >
        <Box color="orange" position={[0, 0, 0]} rotationSpeed={1.5} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} color="white" intensity={1} />
      </CanvasWrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  canvasContainer: {
    width: '100%',
    height: 400,
  },
})
