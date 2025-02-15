import React from 'react'
import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet, Vibration, AccessibilityInfo } from 'react-native'

interface RotationSliderGroupProps {
  rotation: [number, number, number]
  onRotationChange: (newRotation: [number, number, number]) => void
}

const RotationSliderGroup: React.FC<RotationSliderGroupProps> = ({
  rotation,
  onRotationChange,
}) => {
  const updateRotation = (axis: number, value: number) => {
    const newRotation: [number, number, number] = [...rotation]
    newRotation[axis] = value
    onRotationChange(newRotation)

    // 🔥 Ativa a vibração para feedback tátil
    Vibration.vibrate(10)

    // 🔊 Informa via TalkBack a nova rotação
    const axisLabel = axis === 0 ? 'X' : axis === 1 ? 'Y' : 'Z'
    AccessibilityInfo.announceForAccessibility(
      `Rotação eixo ${axisLabel}: ${value.toFixed(2)} radianos`,
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Rotação:</Text>

      {['X', 'Y', 'Z'].map((axis, index) => (
        <View key={axis} style={styles.sliderContainer}>
          <Text style={styles.axisLabel}>Eixo {axis}</Text>
          <Slider
            style={styles.slider}
            minimumValue={-Math.PI}
            maximumValue={Math.PI}
            step={0.01}
            value={rotation[index]}
            onValueChange={(value) => updateRotation(index, value)}
            minimumTrackTintColor="#6200ee"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#6200ee"
            accessible={true}
            accessibilityLabel={`Controle de rotação eixo ${axis}`}
          />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sliderContainer: {
    marginBottom: 10,
  },
  axisLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  slider: {
    width: '100%',
  },
})

export default RotationSliderGroup
