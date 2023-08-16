import Cookies from 'js-cookie';

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
      Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 });
      Cookies.set('username', action.payload.username);
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      };
    case SET_EMAIL_CONFIRMED:
      return {
        ...state,
        isEmailConfirmed: action.payload,
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
