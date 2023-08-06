import Cookies from 'js-cookie';

// Определите новые типы действий (если они не определены в другом месте)
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const SET_REMEMBER_ME = 'SET_REMEMBER_ME';

const initialState = {
  isLoggedIn: Cookies.get('isLoggedIn') === 'true',
  username: Cookies.get('username') || null, // Считываем username из куки при загрузке страницы
  rememberMe: false, // Добавьте новое поле для отслеживания состояния чекбокса
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      // Здесь можно добавить запрос к серверу для проверки логина и пароля
      // Предположим, что сервер возвращает объект с полями loggedIn и username
      if (action.payload.loggedIn) {
        Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 }); // Установите время действия cookies в 1 день или 1 год, в зависимости от rememberMe
        Cookies.set('username', action.payload.username); // Сохраняем username в куку
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload.username,
        };
      } else {
        return state;
      }
    case REGISTER:
      // Здесь также можно добавить запрос к серверу для регистрации нового пользователя
      Cookies.set('isLoggedIn', true, { expires: state.rememberMe ? 365 : 1 }); // Установите время действия cookies в 1 день или 1 год, в зависимости от rememberMe
      Cookies.set('username', action.payload.username); // Сохраняем username в куку
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      };
    case LOGOUT:
      Cookies.remove('isLoggedIn'); // Удаляем куку isLoggedIn при выходе
      Cookies.remove('username'); // Удаляем куку username при выходе
      return { ...initialState, rememberMe: state.rememberMe }; // Возвращаем начальное состояние с сохранением rememberMe
    case SET_REMEMBER_ME:
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
