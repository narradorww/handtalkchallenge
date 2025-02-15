import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/modules/authentication/context/AuthContext'
import AuthNavigator from './src/modules/authentication/navigation/AuthNavigator'
import { ShapeProvider } from './src/modules/threeD/context/ShapeContext'

export default function App() {
  return (
    <AuthProvider>
      <ShapeProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </ShapeProvider>
    </AuthProvider>
  )
}
