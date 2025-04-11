import api from './api';

export const login = async (email, password) => {
  try {
    const response = await api.post('/login/', {
      email,
      password
    });

    // Optionally store the token
    const token = response.data.data?.access; // or whatever your API returns
    if (token) {
      localStorage.setItem('token', token);
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Something went wrong during login.' };
  }
};

export const signUp = async (email, password, role) => {
  try {
    const response = await api.post('/user/', {
      email,
      password,
      role
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Something went wrong during login.' };
  }
};