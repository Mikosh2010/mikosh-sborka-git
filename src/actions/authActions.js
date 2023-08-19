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

// authActions.js

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
          type: 'REGISTER_SUCCESS',
          payload: {
            username: response.data.username,
            email,
          },
        });

        dispatch(confirmEmail(email));
      } else {
        // Dispatch a plain action to handle registration failure
        dispatch({
          type: 'REGISTER_FAILURE',
          payload: {
            error: 'Ошибка при регистрации. Пожалуйста, попробуйте еще раз.',
          },
        });
      }
    } catch (error) {
      // Dispatch a plain action to handle registration error
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: {
          error: 'Ошибка при регистрации. Пожалуйста, попробуйте еще раз.',
        },
      });

      throw error;
    }
  };
};

export const confirmEmail = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/isConfirmed?email=${email}`, {
        email,
      });

      if (response.status === 200 && response.data.confirmed) {
        // Dispatch a plain action to handle successful email confirmation
        dispatch({
          type: 'EMAIL_CONFIRMED',
        });

        // Also, dispatch an action to show the confirm modal
        dispatch(showConfirmModal());
      }
    } catch (error) {
      // Dispatch a plain action to handle email confirmation error
      dispatch({
        type: 'EMAIL_CONFIRMATION_FAILURE',
        payload: {
          error: 'Ошибка при отправке запроса на подтверждение Email. Пожалуйста, попробуйте еще раз.',
        },
      });
    }
  };
};



export const showConfirmModal = () => {
  return {
    type: 'SHOW_CONFIRM_MODAL',
    payload: {
      errorModal: {
        text: 'Вы успешно зарегистрировались! Пожалуйста, проверьте свою почту для подтверждения Email.',
      },
    },
  };
};

export const hideConfirmModal = () => {
  return {
    type: 'HIDE_CONFIRM_MODAL',
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
