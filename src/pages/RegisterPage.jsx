import React, { useState, useEffect, useCallback } from 'react';
import ScrollReveal from 'scrollreveal';
import { motion } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { register } from '../actions/authActions';
import './UI/RegisterPage.css'

const RegisterPage = ({ isLoggedIn }) => {

    useEffect(() => {
        const sr = ScrollReveal();

        sr.reveal('.register__content, .register__img, .input__box', {
            duration: 1500,
            distance: '30px',
            delay: 200,
            opacity: 0,
            origin: 'top',
            interval: 150,
        });
        sr.reveal('.register__title, .register__subtitle', {
            duration: 1500,
            distance: '30px',
            delay: 500,
            opacity: 0,
            origin: 'left',
            interval: 150,
        });
        sr.reveal('.register__to-login, .register__button', {
            duration: 1500,
            distance: '30px',
            delay: 500,
            opacity: 0,
            origin: 'bottom',
        });
    }, []);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [attr, setAttr] = useState(false);
    const [attrRepeat, setAttrRepeat] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
        email: "",
        passwordMatch: "",
    });

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        // Пример валидации email с использованием регулярного выражения
        setEmailValid(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(value));

        // Сброс сообщения об ошибке email
        setErrorMessages((prevState) => ({
            ...prevState,
            email: "",
        }));
    };

    const dispatch = useDispatch();

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (!emailValid) {
                // Вывод ошибки о неверном формате email
                setErrorMessages((prevState) => ({
                    ...prevState,
                    email: "Неправильный формат Email",
                }));
                return;
            }

            if (password !== repeatPassword) {
                // Вывод ошибки о несовпадении паролей
                setErrorMessages((prevState) => ({
                    ...prevState,
                    passwordMatch: "Пароли не совпадают",
                }));
                return;
            }
            dispatch(register(username, email, password));
        },
        [username, email, password, emailValid, repeatPassword, dispatch]
    );

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
                <div className="register">
                    <div className="register__content">
                        <img src="https://i.imgur.com/Acblvqw.png" alt="" className="register__img" />
                        <form className="register__box" onSubmit={handleSubmit}>
                            <Link to="/" className="register__back">
                                <i className="uil uil-arrow-left"></i> НА ГЛАВНУЮ
                            </Link>
                            <div className="register__head">
                                <h3 className="register__title">Создать аккаунт</h3>
                                <h3 className="register__subtitle">Создайте свой первый аккаунт</h3>
                            </div>

                            <div className="register__inputs">
                                <div className="input__box register__input-box">
                                    <input
                                        type="text"
                                        required
                                        placeholder='Введите ваше имя'
                                        autoComplete='off'
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="input__box email__input-box">
                                    {errorMessages.email && (
                                        <div className="register__error-message">{errorMessages.email}</div>
                                    )}
                                    <input
                                        type="email"
                                        required
                                        placeholder='Введите ваш email'
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={emailValid ? "email__valid" : "email__invalid"}
                                    />
                                </div>
                                <div className="input__box pass-input__box">
                                    <input
                                        type={attr ? "text" : "password"}
                                        required
                                        name='password'
                                        placeholder='Придумайте пароль'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <i className={attr ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"} onClick={() => setAttr(!attr)}></i>
                                </div>
                                <div className="input__box pass-repeat__input-box">
                                    {errorMessages.passwordMatch && (
                                        <div className="register__error-message">{errorMessages.passwordMatch}</div>
                                    )}
                                    <input
                                        type={attrRepeat ? "text" : "password"}
                                        required name='repeat-password'
                                        placeholder='Повторите пароль'
                                        value={repeatPassword}
                                        onChange={e => setRepeatPassword(e.target.value)}
                                    />
                                    <i className={attrRepeat ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"} onClick={() => setAttrRepeat(!attrRepeat)}></i>
                                </div>
                            </div>
                            <button className="register__button">Зарегистрироваться</button>
                            <div className="register__to-login">У вас уже есть аккаунт? <Link to="/login">Авторизуйтесь</Link></div>
                        </form>
                        {errorMessages.email && (
                            <div className="register__error-message">{errorMessages.email}</div>
                        )}
                        {errorMessages.passwordMatch && (
                            <div className="register__error-message">{errorMessages.passwordMatch}</div>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(RegisterPage);
