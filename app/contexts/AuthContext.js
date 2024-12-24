import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    const { id, nome, email, token } = userData;

    try {
      await AsyncStorage.setItem('id', id.toString());
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('nome', nome);
      await AsyncStorage.setItem('email', email);
      setUser({ id, nome, email, token });
    } catch (error) {
      console.error('Erro ao armazenar dados do usuário:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.clear();
      setUser(null);
    } catch (error) {
      console.error('Erro ao remover dados do usuário:', error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const id = await AsyncStorage.getItem('id');
        const token = await AsyncStorage.getItem('userToken');
        const nome = await AsyncStorage.getItem('nome');
        const email = await AsyncStorage.getItem('email');

        if (id && token && nome && email) {
          setUser({ id, nome, email, token });
        } else {
          setUser(null); 
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      }
    };

    loadUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
