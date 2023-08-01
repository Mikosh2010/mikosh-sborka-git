export const login = (token) => {


  console.log(token)
  return {
    type: 'LOGIN',
    payload: token
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};