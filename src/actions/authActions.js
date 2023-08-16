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
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        username,
        email,
        password,
      });
      if (response.status === 200) {
        dispatch({
          type: 'REGISTER',
          payload: {
            username: response.data.username,
            email: email,
          },
        });

        // Устанавливаем флаг успешного подтверждения email
        dispatch(setEmailConfirmed(true));

        // Выполняем вход в аккаунт
        dispatch({
          type: 'LOGIN',
          payload: {
            username: response.data.username,
            loggedIn: true,
          },
        });
      } else {
        alert('Ошибка при регистрации. Покажите этот код администрации: ' + response.status);
      }
    } catch (error) {
      alert('Ошибка при регистрации. Покажите эту ошибку администрации: ' + error);
    }
  };
};


export const setEmailConfirmed = (value) => {
  return {
    type: 'SET_EMAIL_CONFIRMED',
    payload: value,
  };
};

export const checkEmailConfirmation = (email) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/isConfirmed?email=${email}`);
      if (response.data.confirmed) {
        dispatch(setEmailConfirmed(true));
        dispatch({
          type: 'LOGIN',
          payload: {
            username: getState().auth.username,
            loggedIn: true,
          },
        });
      } else {
        dispatch(setEmailConfirmed(false));
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: {
          error: 'Error checking user confirmation.',
        },
      });
    }
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
