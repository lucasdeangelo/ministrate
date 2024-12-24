import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

import Login from './screens/login.js';
import Cadastro from './screens/cadastro.js';
import Dashboard from './screens/dashboard.js';

function Page() {
  const { user, login, logout } = useContext(AuthContext);
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const handleLogin = async (userData) => {
    const { id, token } = userData;

    try {
      await AsyncStorage.setItem('userToken', token).then(console.log);;
      await AsyncStorage.setItem('id', id.toString()).then(console.log);;
      login(userData); // Atualiza o contexto
      setCurrentScreen('Dashboard');
    } catch (error) {
      console.error('Erro ao salvar dados de login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('id');
      logout();
      setCurrentScreen('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  let ScreenComponent;

  if (!user) {
    ScreenComponent = currentScreen === 'Cadastro' ? Cadastro : Login;
  } else {
    ScreenComponent = Dashboard;
  }

  return (
    <View style={styles.container}>
      <ScreenComponent 
        navigateTo={navigateTo} 
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
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

