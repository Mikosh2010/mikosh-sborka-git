import Cookies from 'js-cookie';
import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';
export const SET_EMAIL_CONFIRMED = 'SET_EMAIL_CONFIRMED';
export const SHOW_ERROR_MODAL = 'SHOW_ERROR_MODAL';
export const HIDE_ERROR_MODAL = 'HIDE_ERROR_MODAL';
export const SET_LOADING = 'SET_LOADING';

const API_BASE_URL = 'http://localhost:8080/api/users';

const initialState = {
  isLoggedIn: Cookies.get('isLoggedIn') === 'true',
  username: Cookies.get('username') || null,
  rememberMe: Cookies.get('rememberMe') === 'true',
  isEmailConfirmed: false,
  error: null,
  errorModal: {
    active: false,
    text: '',
  },
  isLoading: false, // Добавьте это, чтобы гарантировать обнуление ошибки при загрузке страницы
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
          isLoading: false, // Установка isLoading в false при ошибке
        };
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false, // Установка isLoading в false при ошибке
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REGISTER:
      return (dispatch) => {
        try {
          const response = axios.get(`${API_BASE_URL}/isConfirmed?email=${action.payload.email}`);
          if (response.data.confirmed) {
            Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 });
            Cookies.set('username', action.payload.username);
            dispatch({
              type: 'LOGIN',
              payload: {
                username: action.payload.username,
                loggedIn: true,
              },
            });
          } else {
            dispatch({
              type: 'SET_EMAIL_CONFIRMED', // Добавьте это действие для установки флага подтверждения email
              payload: false,
            });
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
    case SET_EMAIL_CONFIRMED:
      return {
        ...state,
        isEmailConfirmed: action.payload,
      };
    case SHOW_ERROR_MODAL:
      return {
        ...state,
        errorModal: {
          active: true,
          text: action.payload.errorModal.text,
        },
      };
    case HIDE_ERROR_MODAL:
      return {
        ...state,
        errorModal: {
          active: false,
          text: '',
        },
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
