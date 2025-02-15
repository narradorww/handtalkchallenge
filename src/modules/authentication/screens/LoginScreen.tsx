import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  AccessibilityInfo,
} from 'react-native'
import AuthService from '../services/AuthService'

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, insira e-mail e senha.')
      return
    }

    setLoading(true)
    try {
      await AuthService.login(email, password)
      AccessibilityInfo.announceForAccessibility('Login realizado com sucesso')
      Alert.alert('Sucesso', 'Login realizado!')
    } catch (error: unknown) {
      AccessibilityInfo.announceForAccessibility('Erro ao fazer login')
      if (error instanceof Error) {
        Alert.alert('Erro', error.message)
      } else {
        Alert.alert('Erro', 'Ocorreu um erro inesperado ao fazer login.')
      }
    }
    setLoading(false)
  }

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, insira e-mail e senha.')
      return
    }

    setLoading(true)
    try {
      await AuthService.register(email, password)
      AccessibilityInfo.announceForAccessibility('Conta criada com sucesso')
      Alert.alert('Sucesso', 'Conta criada com sucesso!')
    } catch (error: unknown) {
      AccessibilityInfo.announceForAccessibility('Erro ao criar conta')
      if (error instanceof Error) {
        Alert.alert('Erro', error.message)
      } else {
        Alert.alert('Erro', 'Ocorreu um erro inesperado ao criar a conta.')
      }
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        accessible={true}
        accessibilityLabel="Campo de e-mail"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessible={true}
        accessibilityLabel="Campo de senha"
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister} style={styles.registerButton} disabled={loading}>
        <Text style={styles.registerText}>{loading ? 'Criando...' : 'Criar Conta'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  registerText: {
    color: '#007bff',
    fontSize: 16,
  },
})

export default LoginScreen
