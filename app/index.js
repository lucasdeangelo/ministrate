import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

import Login from './screens/login.js';
import Cadastro from './screens/cadastro.js';
import Dashboard from './screens/dashboard.js';
import Perfil from './screens/perfil.js';
import Pesquisa from './screens/pesquisa.js';
import Eventos from './screens/eventos.js';
import Biblioteca from './screens/biblioteca.js';
import Configuracoes from './screens/configuracoes.js';
import Ajuda from './screens/ajuda.js';
import NovoTexto from './screens/novoTexto.js';

function Page() {
  const { user, login, logout } = useContext(AuthContext);
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const handleLogin = async (userData) => {
    const { id, token } = userData;

    try {
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('id', id.toString());
      login(userData); 
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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          setCurrentScreen('Dashboard'); 
        } else {
          setCurrentScreen('Login'); 
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setCurrentScreen('Login');
      } 
    };

    checkAuth();
  }, []);

  let ScreenComponent;

  const screens = {
    Login,
    Cadastro,
    Dashboard,
    Perfil,
    Pesquisa,
    Eventos,
    Biblioteca,
    Configuracoes,
    Ajuda,
    NovoTexto,
  };

  ScreenComponent = screens[currentScreen] || Login;

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

