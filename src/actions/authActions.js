export const login = (username, password) => {
  return {
    type: 'LOGIN',
    payload: {
      username,
      password
    }
  };
};

export const register = (username, email, password) => {
  return {
    type: 'REGISTER',
    payload: {
      username,
      email,
      password
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