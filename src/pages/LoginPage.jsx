import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import './UI/LoginPage.css';

const LoginPage = ({login, isAuthenticated, error}) => {

    const [attr, setAttr] = useState("");

    return (
        <div>
            <div className="login">
                <h1 className="login__main-title">АВТОРИЗАЦИЯ</h1>

                <div className="login__content">
                    <img src="https://i.imgur.com/Acblvqw.png" alt="" className="login__img" />
                    <form className="login__box">
                        <div className="login__head">
                            <h3 className="login__title">Войти</h3>
                            <h3 className="login__subtitle">Вход в свой аккаунт</h3>
                        </div>

                        <div className="login__inputs">
                            <div className="input__box login__input-box">
                                <input type="text" required/>
                                <span className='input__text'>Введите логин</span>
                                <i className='bottom-border'></i>
                            </div>
                            <div className="input__box pass-input__box">
                                <input type={attr ? "text" : "password"} required/>
                                <span className='input__text'>Введите пароль</span>
                                <i className={attr ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"} onClick={() => setAttr(!attr)}></i>
                                <i className='bottom-border'></i>
                            </div>
                        </div>
                        <div className="login__links">
                            <div className="login__remember">
                                <input type="checkbox" id="check" />
                                <label className="login__remember-text">Запомнить меня</label>
                            </div>
                            <div className="login__forgot">
                                <Link to="/" className="login__forgot-link">Забыли пароль?</Link>
                            </div>
                        </div>
                        <button className="login__button">Войти</button>
                        <div className="login__to-register">Вы здесь впервые? <Link to="/register">Зарегистрируйтесь</Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
}
  
export default LoginPage;
