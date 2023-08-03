const initialState = {
  isLoggedIn: false,
  username: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // Проверка логина и пароля на сервере
      if (action.payload.username === 'admin' && action.payload.password === 'password') {
        return {
          isLoggedIn: true,
          username: action.payload.username
        };
      } else {
        return state;
      }
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;