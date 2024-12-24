import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

export default function Login({ navigateTo }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3333/login', { email, password });

      if (response.data.token) {
        const { id_user, token, nome } = response.data;
        login({ id: id_user, email, nome, token });
        navigateTo('Dashboard');  
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message || error);
      alert('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.h1}>Seja bem-vindo de volta!</Text>

      <View>
        <Text style={{...styles.h3, paddingBottom: 8}}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu Email..."
          value={email}
          onChangeText={setEmail}
        />

        <Text style={{...styles.h3, paddingBottom: 8}}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira sua Senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.senha}>
          <Text style={styles.h3}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submit} onPress={handleLogin}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.createAccount}>
          <Text style={styles.h3}>Não tem conta?</Text>
          <TouchableOpacity onPress={() => navigateTo('Cadastro')}>
            <Text style={styles.span}> Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  h1: {
    fontSize: 30,
    lineHeight: 40,
    textAlign: 'left',  
    color: '#000'  
  },
  h3: {
    fontSize: 14,
    color: '#000',
    paddingTop: 15     
  },
  input: {
    backgroundColor: '#D0C3FF',
    padding: 16,
    paddingVertical: 14,
    borderRadius: 8,  
    color: '#939191',
  },
  senha: {
    marginVertical: 10,
  },
  submit: {
    marginTop: 15,
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#1C0080',
    alignItems: 'center'
  },
  submitText: {
    color: '#fff',
    fontSize: 16
  },
  createAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  span: {
    paddingTop: 12,
    color: '#1C0080',
    fontWeight: 'bold',
  }
})
