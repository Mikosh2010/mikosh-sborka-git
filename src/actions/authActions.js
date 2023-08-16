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
          // Обновление состояния после успешной регистрации
          dispatch({
            type: 'REGISTER',
            payload: {
              username: response.data.username,
              email: response.data.email,
            },
          });
        } else {
          alert('Ошибка при регистрации. Покажите этот код администрации: ' + response.status);
        }
      })
      .catch((error) => {
        alert('Ошибка при регистрации. Покажите эту ошибку администрации: ' + error);
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
