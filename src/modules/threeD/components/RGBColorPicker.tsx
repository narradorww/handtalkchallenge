import React, { useState } from 'react'
import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet, AccessibilityInfo, Vibration } from 'react-native'

interface RGBColorPickerProps {
  label: string
  value: string
  onChange: (color: string) => void
}

const RGBColorPicker: React.FC<RGBColorPickerProps> = ({ label, value, onChange }) => {
  const [red, setRed] = useState(255)
  const [green, setGreen] = useState(255)
  const [blue, setBlue] = useState(255)

  const updateColor = (newRed: number, newGreen: number, newBlue: number) => {
    const hexColor = `#${newRed.toString(16).padStart(2, '0')}${newGreen
      .toString(16)
      .padStart(2, '0')}${newBlue.toString(16).padStart(2, '0')}`.toUpperCase()

    setRed(newRed)
    setGreen(newGreen)
    setBlue(newBlue)
    onChange(hexColor)

    Vibration.vibrate(50)

    AccessibilityInfo.announceForAccessibility(
      `${label} alterado para vermelho ${newRed}, verde ${newGreen}, azul ${newBlue}`,
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>

      <View style={styles.sliderContainer}>
        <Text style={[styles.colorLabel, { color: 'red' }]}>R</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          step={1}
          value={red}
          onValueChange={(value) => updateColor(value, green, blue)}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#ccc"
          thumbTintColor="red"
          accessible={true}
          accessibilityLabel="Controle de vermelho"
        />
        <Text style={styles.valueText}>{red}</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Text style={[styles.colorLabel, { color: 'green' }]}>G</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          step={1}
          value={green}
          onValueChange={(value) => updateColor(red, value, blue)}
          minimumTrackTintColor="green"
          maximumTrackTintColor="#ccc"
          thumbTintColor="green"
          accessible={true}
          accessibilityLabel="Controle de verde"
        />
        <Text style={styles.valueText}>{green}</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Text style={[styles.colorLabel, { color: 'blue' }]}>B</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          step={1}
          value={blue}
          onValueChange={(value) => updateColor(red, green, value)}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="#ccc"
          thumbTintColor="blue"
          accessible={true}
          accessibilityLabel="Controle de azul"
        />
        <Text style={styles.valueText}>{blue}</Text>
      </View>

      <View style={[styles.colorPreview, { backgroundColor: value }]}>
        <Text style={styles.colorCode}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  colorLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 20,
    textAlign: 'center',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  valueText: {
    fontSize: 16,
    width: 40,
    textAlign: 'center',
  },
  colorPreview: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },
})

export default RGBColorPicker
