import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider'
import { View, TouchableOpacity, Text, StyleSheet, AccessibilityInfo } from 'react-native'
import RGBColorPicker from './RGBColorPicker'
import RotationSliderGroup from './RotationSliderGroup'
import UserSettingsService from '../../authentication/services/UserSettingsService'
import { useShapeController } from '../controllers/ShapeController'

const ShapeSelector: React.FC = () => {
  const {
    shape,
    color,
    backgroundColor,
    rotation,
    size,
    updateShape,
    updateColor,
    updateBackgroundColor,
    updateRotation,
    updateSize,
  } = useShapeController()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(`Forma selecionada: ${shape}`)
    loadShapeSettings()
  }, [shape])

  // 🔥 Carregar as configurações da forma ao trocar de forma
  const loadShapeSettings = async () => {
    setLoading(true)
    const settings = await UserSettingsService.loadShapeSettings(shape)
    if (settings) {
      updateColor(settings.color)
      updateRotation(settings.rotation)
      updateSize(settings.size)
      updateBackgroundColor(settings.backgroundColor)
    }
    setLoading(false)
  }

  // 🔥 Salvar automaticamente quando o usuário altera alguma configuração
  useEffect(() => {
    if (!loading) {
      UserSettingsService.saveShapeSettings(shape, {
        color,
        rotation,
        size,
        backgroundColor,
      })
    }
  }, [color, backgroundColor, rotation, size])

  return (
    <View style={styles.container}>
      <Text style={styles.header} accessibilityRole="header">
        Configurações do Objeto 3D
      </Text>

      <View style={styles.section}>
        <Text style={styles.label}>Forma:</Text>
        <View style={styles.buttonContainer}>
          {['cube', 'dodecahedron', 'cone'].map((value) => (
            <TouchableOpacity
              key={value}
              onPress={() => updateShape(value as 'cube' | 'dodecahedron' | 'cone')}
              style={[styles.button, shape === value && styles.buttonActive]}
              accessible={true}
              accessibilityLabel={`Selecionar ${value}`}
            >
              <Text style={styles.buttonText}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <RGBColorPicker label="Cor do Objeto" value={color} onChange={updateColor} />
      <RGBColorPicker
        label="Cor do Fundo"
        value={backgroundColor}
        onChange={updateBackgroundColor}
      />

      <View style={styles.section}>
        <Text style={styles.label}>Tamanho:</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.1}
          maximumValue={2}
          step={0.1}
          value={size}
          onValueChange={updateSize}
          minimumTrackTintColor="#6200ee"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#6200ee"
          accessible={true}
          accessibilityLabel="Controle de tamanho"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Rotação:</Text>
        <RotationSliderGroup rotation={rotation} onRotationChange={updateRotation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },

  button: {
    width: '90%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonActive: {
    backgroundColor: '#6200ee',
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
  slider: {
    width: '100%',
  },
})

export default ShapeSelector
