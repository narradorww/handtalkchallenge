import React, { useEffect } from 'react'
import Slider from '@react-native-community/slider'
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  AccessibilityInfo,
} from 'react-native'
import { useShapeController } from '../controllers/ShapeController'

const ShapeSelector: React.FC = () => {
  const {
    shape,
    color,
    rotation,
    size,
    backgroundColor,
    updateShape,
    updateColor,
    updateRotation,
    updateSize,
    updateBackgroundColor,
  } = useShapeController()

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(`Forma selecionada: ${shape}`)
  }, [shape])

  // Lista de formas disponíveis
  const shapes = [
    { label: 'Cubo', value: 'cube' },
    { label: 'Dodecaedro', value: 'dodecahedron' },
    { label: 'Cone', value: 'cone' },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.header} accessibilityRole="header">
        Configurações do Objeto 3D
      </Text>

      {/* Seletor de Forma */}
      <View style={styles.section}>
        <Text style={styles.label}>Forma:</Text>
        <View style={styles.buttonContainer}>
          {shapes.map(({ label, value }) => (
            <TouchableOpacity
              key={value}
              onPress={() => updateShape(value)}
              style={[styles.button, shape === value && styles.buttonActive]}
              accessible={true}
              accessibilityLabel={`Selecionar ${label}`}
            >
              <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Cor do Objeto */}
      <View style={styles.section}>
        <Text style={styles.label}>Cor do Objeto:</Text>
        <TextInput
          style={styles.input}
          value={color}
          onChangeText={updateColor}
          placeholder="Digite um código HEX"
          placeholderTextColor="#999"
          accessible={true}
          accessibilityLabel="Campo para definir a cor do objeto"
          testID="color-input"
        />
      </View>

      {/* Cor do Fundo */}
      <View style={styles.section}>
        <Text style={styles.label}>Cor do Fundo:</Text>
        <TextInput
          style={styles.input}
          value={backgroundColor}
          onChangeText={updateBackgroundColor}
          placeholder="Digite um código HEX"
          placeholderTextColor="#999"
          accessible={true}
          accessibilityLabel="Campo para definir a cor do fundo"
          testID="background-color-input"
        />
      </View>

      {/* Controle de Tamanho */}
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

      {/* Controle de Rotação */}
      <View style={styles.section}>
        <Text style={styles.label}>Rotação:</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.01}
          maximumValue={0.5}
          step={0.01}
          value={rotation[0]}
          onValueChange={(value: number) => updateRotation([value, rotation[1], rotation[2]])}
          minimumTrackTintColor="#6200ee"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#6200ee"
          accessible={true}
          accessibilityLabel="Controle de rotação"
        />
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
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
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
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  slider: {
    width: '100%',
  },
})

export default ShapeSelector
