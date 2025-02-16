import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from 'src/modules/main/screens/MainScreen'
import { useAuth } from '../../modules/authentication/hooks/useAuth'
import LoginScreen from '../../modules/authentication/screens/LoginScreen'
import ConfigScreen from '../../modules/threeD/screens/ConfigScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const RootNavigator: React.FC = () => {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="AppTabs">
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarLabelStyle: { fontSize: 16 },
                  tabBarStyle: { paddingBottom: 10, height: 80 },
                  tabBarAccessibilityLabel: 'Navegação entre telas principais',
                }}
              >
                <Tab.Screen
                  name="Main"
                  component={MainScreen}
                  options={{
                    tabBarLabel: 'Exibição 3D',
                    accessibilityLabel: 'Tela de exibição de formas 3D',
                    accessibilityRole: 'tab',
                  }}
                />
                <Tab.Screen
                  name="Config"
                  component={ConfigScreen}
                  options={{
                    tabBarLabel: 'Configurações',
                    accessibilityLabel: 'Tela de configuração de formas geométricas',
                    accessibilityRole: 'tab',
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
