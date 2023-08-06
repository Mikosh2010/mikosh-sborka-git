// src/actions/authActions.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/auth';

export const login = (username, password) => {
  return (dispatch) => {
    axios
      .post(`${API_BASE_URL}/signin`, {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 200 && response.data.loggedIn) {
          dispatch({
            type: 'LOGIN', // Используйте переменную LOGIN, определенную вверху файла
            payload: {
              username: response.data.username,
              loggedIn: response.data.loggedIn,
            },
          });
        } else {
          console.error('Ошибка при авторизации');
        }
      })
      .catch((error) => {
        // Обработка ошибки
      });
  };
};

export const register = (username, email, password) => {
  const firstName = "Mikosh"
  const lastName ="Pikosh"
  return (dispatch) => {
    axios
      .post(`${API_BASE_URL}/signup`, {
        username,
        email,
        password,
        firstName,
        lastName
        
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'REGISTER',
            payload: {
              username: response.data.username,
            },
          });
        } else {
          console.error('Ошибка при регистрации')
        }
      })
      .catch((error) => {
        // Обработка ошибки
      });
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const setRememberMe = (value) => {
  return {
    type: 'SET_REMEMBER_ME',
    payload: value,
  };
};
