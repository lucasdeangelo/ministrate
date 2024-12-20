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
  const response = await axios.post(
    'http://localhost:3333/login',  // Certifique-se de que esta URL está correta
    loginUser,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  
};

