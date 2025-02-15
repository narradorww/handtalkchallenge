import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { useAuth } from '../../authentication/hooks/useAuth'
import ThreeDShapes from '../../threeD/components/3d/ThreeDShapes'
import CanvasWrapper from '../../threeD/components/CanvasWrapper'
import ShapeSelector from '../../threeD/components/ShapeSelector'
import { useShapeController } from '../../threeD/controllers/ShapeController'

const colors = {
  background: '#F8F9FA',
  primary: '#2A2D34',
  secondary: '#4A4E69',
  accent: '#0077B6',
  text: '#2B2D42',
  surface: '#FFFFFF',
}

const MainScreen: React.FC = () => {
  const { logout } = useAuth()
  const { shape, color, rotation, size } = useShapeController()

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text
            style={styles.header}
            accessibilityRole="header"
            accessibilityLabel="Configurações do Objeto 3D"
          >
            Configurações do Objeto 3D
          </Text>

          <View style={styles.canvasWrapper}>
            <CanvasWrapper
              style={styles.canvasContainer}
              sceneDescription={`Cena 3D contendo um ${shape} na cor ${color}`}
            >
              <ThreeDShapes
                shape={shape}
                color={color}
                position={[0, 0, 0]}
                rotation={rotation}
                size={size}
              />
            </CanvasWrapper>
          </View>

          <View style={styles.controlsContainer}>
            <ShapeSelector />
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Text style={styles.logoutButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginVertical: 24,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  canvasWrapper: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  canvasContainer: {
    width: '100%',
    height: 350,
    borderRadius: 8,
    overflow: 'hidden',
  },
  controlsContainer: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  logoutButton: {
    backgroundColor: colors.accent,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default MainScreen
