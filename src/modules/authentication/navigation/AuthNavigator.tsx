import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from 'src/modules/main/screens/MainScreen'
import { useAuth } from '../hooks/useAuth'
import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator()

const AuthNavigator: React.FC = () => {
  const { user } = useAuth()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={MainScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  )
}

export default AuthNavigator
