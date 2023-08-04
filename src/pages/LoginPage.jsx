import React, { useState, useCallback } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from '../actions/authActions';
import './UI/LoginPage.css';

const LoginForm = ({isLoggedIn, login}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attr, setAttr] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    login(username, password);
  }, [username, password, login]);

  console.log(isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <Navigate replace to="/"/>
      ) : (
        <div className="login">
          <h1 className="login__main-title">АВТОРИЗАЦИЯ</h1>

          <div className="login__content">
            <img src="https://i.imgur.com/Acblvqw.png" alt="" className="login__img" />
            <form className="login__box" onSubmit={onSubmit}>
              <div className="login__head">
                <h3 className="login__title">Войти</h3>
                <h3 className="login__subtitle">Вход в свой аккаунт</h3>
              </div>

              <div className="login__inputs">
                <div className="input__box login__input-box">
                  <input 
                    type="text" 
                    required 
                    placeholder='Введите логин' 
                    autoComplete='off'
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                  />
                </div>
                <div className="input__box pass-input__box">
                  <input
                    type={attr ? "text" : "password"}
                    required
                    placeholder='Введите пароль'
                    autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={attr ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"}
                    onClick={() => setAttr(!attr)}
                  ></i>
                </div>
              </div>
              <div className="login__links">
                <div className="login__remember">
                  <input type="checkbox" id="check" name='check'/>
                  <label for="check" className="login__remember-text">Запомнить меня</label>
                </div>
                <div className="login__forgot">
                  <Link to="/" className="login__forgot-link">
                    Забыли пароль?
                  </Link>
                </div>
              </div>
              <button className="login__button" type="submit">
                Войти
              </button>
              <div className="login__to-register">
                Вы здесь впервые? <Link to="/register">Зарегистрируйтесь</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  username: state.auth.username,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);