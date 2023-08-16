import Cookies from 'js-cookie';
import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';
export const SET_EMAIL_CONFIRMED = 'SET_EMAIL_CONFIRMED';

const storedIsLoggedIn = Cookies.get('isLoggedIn') === 'true';
const storedUsername = Cookies.get('username') || null;
const storedRememberMe = Cookies.get('rememberMe') === 'true';

const initialState = {
  isLoggedIn: storedIsLoggedIn,
  username: storedUsername,
  rememberMe: storedRememberMe,
  isEmailConfirmed: false,
  error: null, // Добавьте это, чтобы гарантировать обнуление ошибки при загрузке страницы
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.payload.loggedIn) {
        Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 });
        Cookies.set('username', action.payload.username);
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload.username,
          error: null,
        };
      } else {
        return {
          ...state,
          error: action.payload.error,
        };
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case REGISTER:
      axios.get(`http://localhost:8080/isConfirmed?${action.payload.email}`)
          .then(response => {
            if (response.data.confirmed) {
              // User is confirmed, set isLoggedIn, username, and cookies
              Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 });
              Cookies.set('username', action.payload.username);
              return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username,
              };
            } else {
              // User is not confirmed, update state accordingly
              return {
                ...state,
                error: 'User is not confirmed.', // You can set a relevant error message
              };
            }
          })
          .catch(error => {
            return {
              ...state,
              error: 'Error checking user confirmation.', // Handle the error as needed
            };
          });
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        email: action.payload.email,
      };
    case LOGOUT:
      Cookies.remove('isLoggedIn');
      Cookies.remove('username');
      Cookies.remove('rememberMe');
      return { ...state, isLoggedIn: false, username: null, rememberMe: state.rememberMe };
    case SET_REMEMBER_ME:
      Cookies.set('rememberMe', action.payload);
      return {
        ...state,
        rememberMe: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
