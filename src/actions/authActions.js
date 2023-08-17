import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/auth';

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_LOADING', // Добавьте действие для установки isLoading в true
      payload: true,
    });

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
      })
      .finally(() => {
        dispatch({
          type: 'SET_LOADING', // Добавьте действие для установки isLoading в false
          payload: false,
        });
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
        // Dispatching action directly
        dispatch({
          type: 'REGISTER_SUCCESS',
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

        // Возвращаем успешный response для обработки
        return response;
      } else {
        // Dispatching action directly
        dispatch({
          type: 'REGISTER_FAILURE',
          payload: {
            errorModal: {
              active: true,
              text: 'Ошибка при регистрации. Покажите этот код администрации: ' + response.status,
            },
          },
        });

        // Возвращаем response для обработки ошибки
        return response;
      }
    } catch (error) {
      // Dispatching action directly
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: {
          errorModal: {
            active: true,
            text: `
            Ошибка при регистрации. Покажите эту ошибку администрации: 
            
            ${error}!

            Также, если вы с компьютера, желательно нажать F12 и в вылезающем окне открыть Console (или Консоль), и также показать его администрации.
            `,
          },
        },
      });

      // Возвращаем ошибку для обработки
      throw error;
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

export const hideErrorModal = () => {
  return {
    type: 'HIDE_ERROR_MODAL',
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
