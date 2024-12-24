import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 10000
});

export const registerUser = async () => {
  const response = await api.post('/user');
  return response.data;
};

export const userLogin = async (loginUser) => {
  try {
    const response = await api.post('/login', loginUser, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;  
  } catch (error) {
    console.error('Erro na API:', error);
    throw error; 
  }
};