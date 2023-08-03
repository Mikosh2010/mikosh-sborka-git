import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UI/RegisterPage.css'

const RegisterPage = () => {

    const [attr, setAttr] = useState();
    const [attrRepeat, setAttrRepeat] = useState();

    return (
        <div>
            <div className="register">
                <h1 className="register__main-title">РЕГИСТРАЦИЯ</h1>

                <div className="register__content">
                    <img src="https://i.imgur.com/Acblvqw.png" alt="" className="register__img" />
                    <form className="register__box">
                        <Link to="/" className="register__back">
                            <i className="uil uil-arrow-left"></i> НА ГЛАВНУЮ
                        </Link>
                        <div className="register__head">
                            <h3 className="register__title">Создать аккаунт</h3>
                            <h3 className="register__subtitle">Создайте свой первый аккаунт</h3>
                        </div>

                        <div className="register__inputs">
                            <div className="input__box register__input-box">
                                <input type="text" required="required" />
                                <span className='input__text'>Введите никнейм</span>
                                <i className='bottom-border'></i>
                            </div>
                            <div className="input__box email__input-box">
                                <input type="email" required="required" />
                                <span className='input__text'>Введите ваш Email</span>
                                <i className='bottom-border'></i>
                            </div>
                            <div className="input__box pass-input__box">
                                <input type={attr ? "text" : "password"} required="required" name='password'/>
                                <span className='input__text'>Придумайте пароль</span>
                                <i className={attr ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"} onClick={() => setAttr(!attr)}></i>
                                <i className='bottom-border'></i>
                            </div>
                            <div className="input__box pass-repeat__input-box">
                                <input type={attrRepeat ? "text" : "password"} required="required" name='repeat-password'/>
                                <span className='input__text'>Повторите пароль</span>
                                <i className={attrRepeat ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"} onClick={() => setAttrRepeat(!attrRepeat)}></i>
                                <i className='bottom-border'></i>
                            </div>
                        </div>
                        <button className="register__button">Зарегистрироваться</button>
                        <div className="register__to-login">У вас уже есть аккаунт? <Link to="/login">Авторизуйтесь</Link></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export {RegisterPage};
