import React, { useState, useCallback, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Navigate, Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { login, logout, setRememberMe } from '../actions/authActions';
import './UI/LoginPage.css';

const LoginForm = ({ isLoggedIn, login, rememberMe }) => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.login__content, .login__img', {
      duration: 1500,
      distance: '30px',
      delay: 200,
      opacity: 0,
      origin: 'top',
      interval: 150,
    });
    sr.reveal('.login__title, .login__subtitle, .input__box, .login__button', {
      duration: 1500,
      distance: '30px',
      delay: 500,
      opacity: 0,
      origin: 'top',
      interval: 150,
    });
    sr.reveal('.login__remember', {
      duration: 1500,
      distance: '30px',
      delay: 500,
      opacity: 0,
      origin: 'left',
      interval: 150,
    });
    sr.reveal('.login__forgot', {
      duration: 1500,
      distance: '30px',
      delay: 500,
      opacity: 0,
      origin: 'right',
      interval: 150,
    });
    sr.reveal('.login__to-register', {
      duration: 1500,
      distance: '30px',
      delay: 500,
      opacity: 0,
      origin: 'bottom',
      interval: 150,
    });
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attr, setAttr] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(username, password));
    },
    [username, password, dispatch, login]
  );

  const handleCheckboxChange = (e) => {
    dispatch(setRememberMe(e.target.checked));
  };

  useEffect(() => {
    setUsername(isLoggedIn ? isLoggedIn.username : '');
  }, [isLoggedIn]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="login">
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
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                  />
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
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  username: state.auth.username,
  rememberMe: state.auth.rememberMe,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);