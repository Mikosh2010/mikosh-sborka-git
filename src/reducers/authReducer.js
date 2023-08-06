// src/redux/authReducer.js
import Cookies from 'js-cookie';

// reducers/authReducer.js

const initialState = {
  isLoggedIn: Cookies.get('isLoggedIn') === 'true',
  username: Cookies.get('username') || null, // Считываем username из куки при загрузке страницы
  rememberMe: false, // Добавьте новое поле для отслеживания состояния чекбокса
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.payload.username === 'mikosh' && action.payload.password === 'gRoove48') {
        Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 }); // Установите время действия cookies в 1 день или 1 год, в зависимости от rememberMe
        Cookies.set('username', action.payload.username); // Сохраняем username в куку
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload.username,
        };
      } else {
        return state;
      };
    case 'REGISTER':
      Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 }); // Установите время действия cookies в 1 день или 1 год, в зависимости от rememberMe
      Cookies.set('username', action.payload.username); // Сохраняем username в куку
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      };
    case 'LOGOUT':
      Cookies.remove('isLoggedIn'); // Удаляем куку isLoggedIn при выходе
      Cookies.remove('username'); // Удаляем куку username при выходе
      return initialState;
    case 'SET_REMEMBER_ME':
      Cookies.set('rememberMe', action.payload); // Сохраните значение rememberMe в cookies
      return {
        ...state,
        rememberMe: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;