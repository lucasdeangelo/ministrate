import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { registerUser } from '../api/api';

export default function Cadastro({ navigateTo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    
    const createUser = {
      name,
      email,
      password,
    };

    try {
      const response = await registerUser(createUser);

      if (response.status === 201 || response.status === 200) {
        console.log(response)
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigateTo('Login');
      } else {
        throw new Error(`Erro inesperado: ${response.status}`);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao realizar cadastro. Verifique os dados e tente novamente.');
      console.error('Erro no cadastro:', error.message || error);
    }
  };

  return (
    <View style={styles.main}>
        {/* <Image source={require('../../assets/images/icon.png')} style={styles.image}/> */}
        <View style={styles.mainText}>
          <Text style={styles.h1}>Crie sua conta!</Text>           
          <Text style={{...styles.txt, paddingTop: 5}}>Insira as informações abaixo para criar sua conta!</Text>        
        </View>

        <View style={styles.form}>
          <View>
            <Text style={{...styles.h3, paddingBottom: 8}}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira seu Nome...'}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={{paddingTop: 12}}>
            <Text style={{...styles.h3, paddingBottom: 8}}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira seu Email...'}
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
            />
          </View>          

          <View style={{paddingTop: 12}}>
            <Text style={{...styles.h3, paddingBottom: 8}}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder={'Insira sua Senha...'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={{paddingTop: 12}}>
            <Text style={{...styles.h3, paddingBottom: 8}}>Confirme sua Senha</Text>
            <TextInput              
              style={styles.input}
              placeholder={'Insira sua Senha Novamente...'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.submit} onPress={handleRegister}>
            <Text style={styles.submitText}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={{alignItems: 'center', textAlign: 'center', paddingTop: 20}}>
            <Text style={styles.h3}>Ao se cadastrar você estará concordando com os termos de politica e privacidade!</Text>
          </View>

          <View style={styles.createAccount}>
            <Text style={styles.h3}>Já tem conta?</Text>
            <TouchableOpacity onPress={() => navigateTo('Login')}>
              <Text style={styles.span}> Entrar</Text>
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
  form: {
    paddingTop: 20
  },
  input: {
    backgroundColor: '#D0C3FF',
    padding: 16,
    paddingVertical: 14,
    borderRadius: 8,  
    color: '#939191',
  },
  submit: {
    marginTop: 30,
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