import React, { createContext, useContext, useState, useEffect } from 'react'
import UserSettingsService from '../../authentication/services/UserSettingsService'

interface ShapeState {
  shape: 'cube' | 'dodecahedron' | 'cone'
  color: string
  rotation: [number, number, number]
  size: number
  backgroundColor: string
}

interface ShapeContextProps extends ShapeState {
  setShape: (shape: 'cube' | 'dodecahedron' | 'cone') => void
  setColor: (color: string) => void
  setRotation: (rotation: [number, number, number]) => void
  setSize: (size: number) => void
  setBackgroundColor: (color: string) => void
}

const ShapeContext = createContext<ShapeContextProps | undefined>(undefined)

export const ShapeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shape, setShape] = useState<'cube' | 'dodecahedron' | 'cone'>('cube')
  const [color, setColor] = useState<string>('#FFA500')
  const [rotation, setRotation] = useState<[number, number, number]>([0.01, 0.01, 0.01])
  const [size, setSize] = useState<number>(0.5)
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff')

  // 🔥 Sempre que a forma mudar, carregar as configurações do Firebase
  useEffect(() => {
    async function loadSettings() {
      const settings = await UserSettingsService.loadShapeSettings(shape)
      if (settings) {
        setColor(settings.color)
        setRotation(settings.rotation)
        setSize(settings.size)
        setBackgroundColor(settings.backgroundColor)
      }
    }
    loadSettings()
  }, [shape])

  return (
    <ShapeContext.Provider
      value={{
        shape,
        color,
        rotation,
        size,
        backgroundColor,
        setShape,
        setColor,
        setRotation,
        setSize,
        setBackgroundColor,
      }}
    >
      {children}
    </ShapeContext.Provider>
  )
}

export const useShapeContext = () => {
  const context = useContext(ShapeContext)
  if (!context) {
    throw new Error('useShapeContext must be used within a ShapeProvider')
  }
  return context
}
