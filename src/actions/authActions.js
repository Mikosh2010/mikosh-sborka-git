// src/actions/authActions.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/auth';

// ... (ваш существующий код)

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
            type: 'LOGIN',
            payload: {
              username: response.data.username,
            },
          });
        } else {
          // Обработка ошибки, если авторизация не удалась
        }
      })
      .catch((error) => {
        // Обработка ошибки
      });
  };
};

export const register = (username, email, password) => {
  return (dispatch) => {
    axios
      .post(`${API_BASE_URL}/signup`, {
        username,
        email,
        password,
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

// ... (ваш существующий код)
