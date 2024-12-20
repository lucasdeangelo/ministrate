import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);  
  };

  const logout = () => {
    setUser(null);  
  };


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
