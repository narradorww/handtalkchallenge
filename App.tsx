import React from 'react'
import { AuthProvider } from './src/modules/authentication/context/AuthContext'
import RootNavigator from './src/modules/navigation/RootNavigator'
import { ShapeProvider } from './src/modules/threeD/context/ShapeContext'

export default function App() {
  return (
    <AuthProvider>
      <ShapeProvider>
        <RootNavigator />
      </ShapeProvider>
    </AuthProvider>
  )
}
