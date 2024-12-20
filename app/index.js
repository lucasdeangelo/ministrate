import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

import Login from './screens/login.js';
import Cadastro from './screens/cadastro.js';
import Dashboard from './screens/dashboard.js';

function Page() {
  const { user } = useContext(AuthContext);
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigateTo = (screen) => {
    console.log('Navegando para:', screen); // Debug
    setCurrentScreen(screen);
  };

  let ScreenComponent;

  if (!user) {
    ScreenComponent = currentScreen === 'Cadastro' ? Cadastro : Login;
  } else {
    ScreenComponent = Login; // Altere conforme sua lógica de usuário logado
  }

  return (
    <View style={styles.container}>
      <ScreenComponent navigateTo={navigateTo} />
    </View>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

