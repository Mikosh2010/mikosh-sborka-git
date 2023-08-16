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
            type: 'LOGIN',
            payload: {
              username: response.data.username,
              loggedIn: response.data.loggedIn,
            },
          });
        } else {
          dispatch({
            type: 'LOGIN_FAILURE',
            payload: {
              error: 'Неверный логин или пароль',
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: {
            error: 'Неверный логин или пароль',
          },
        });
        console.log(error);
      });
  };
};

export const register = (username, email, password) => {
  return (dispatch) => {
    axios
      .post(`${API_BASE_URL}/signup`, {
        username,
        email,
        password
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'REGISTER',
            payload: {
              username: response.data.username,
            },
          });
          dispatch({
            type: 'SET_EMAIL_CONFIRMED',
            payload: true,
          });
        } else {
          alert('Ошибка при регистрации ' + response + " Покажите этот код администрации.")
        }
      })
      .catch((error) => {
        alert('Ошибка при регистрации,' + error + "Покажите эту ошибку администрации.");
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
