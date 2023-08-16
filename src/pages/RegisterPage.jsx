import React, { useState, useEffect, useCallback } from 'react';
import ScrollReveal from 'scrollreveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { register } from '../actions/authActions'
import RegisterImage from '../img/register-image.jpg';
import './UI/RegisterPage.css';
import ConfirmModal from '../components/ConfirmModal';

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

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [attr, setAttr] = useState(false);
    const [attrRepeat, setAttrRepeat] = useState(false);

    const [isEmailValid, setEmailValid] = useState(false);
    const [isNameValid, setNameValid] = useState(false);
    const [isRepeatValid, setRepeatValid] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(false);
    const [registrationError, setRegistrationError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const emailValid = (value) => {
        setEmailValid(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value));
    };

    const handleNameChange = (value) => {
        setNameValid(value.length >= 6 && value.length <= 18 && /^(?=.*[a-zA-Z])(?=.*\d?.*).+$/.test(value));
    };

    const handleRepeatChange = (value) => {
        setRepeatValid(value === password);
    };

    const handlePasswordChange = (value) => {
        setPasswordValid(value.length >= 8);
    };

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            if (!isEmailValid || !isNameValid || !isPasswordValid || !isRepeatValid) {
                return;
            }
    
            setIsLoading(true);
    
            try {
                const response = await dispatch(register(username, email, password));
    
                if (response.error) {
                    // Пришла ошибка с сервера
                    setRegistrationError("Такой email уже существует.");
                } else {
                    // Успешная регистрация
                    setShowConfirmModal(true);
                }
            } catch (error) {
                console.error("Произошла ошибка:", error);
                setRegistrationError("Такой email уже существует.");
            } finally {
                setIsLoading(false);
            }
        },
        [isEmailValid, isNameValid, isPasswordValid, isRepeatValid, username, password, email, dispatch]
    );
    

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <AnimatePresence>
                {showConfirmModal && (
                    <ConfirmModal
                        isEmailConfirmed={showConfirmModal}
                        // You can also add exit animations here if needed
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>


            {isLoggedIn ? (
                <Navigate to="/area" />
            ) : (
                <div className="register">
                    <div className="register__content">
                        <img src={RegisterImage} alt="" className="register__img" />
                        <form className="register__box" onSubmit={handleSubmit}>
                            <Link to="/" className="register__back">
                                <i className="uil uil-arrow-left"></i> НА ГЛАВНУЮ
                            </Link>
                            <div className="register__head">
                                <h3 className="register__title">Создать аккаунт</h3>
                                <h3 className="register__subtitle">Создайте свой первый аккаунт</h3>
                            </div>
                            {registrationError && <p className="error-message email-repeat">{registrationError}</p>}    
                            <div className="register__inputs">
                                <div className="input__box register__input-box">
                                    <input
                                        type="text"
                                        required
                                        placeholder='Введите ваше имя'
                                        autoComplete='off'
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                            handleNameChange(e.target.value);
                                        }}
                                        className={!isNameValid ? "invalid" : "valid"}
                                    />
                                    {!isNameValid && <p className="error-message invalid-text">Имя должно быть длиной от 6 до 18 символов</p>}
                                </div>
                                <div className="input__box email__input-box">
                                    <input
                                        type="email"
                                        required
                                        placeholder='Введите ваш email'
                                        value={email}
                                        autoComplete='off'
                                        className={!isEmailValid && !registrationError ? "invalid" : "valid"}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            emailValid(e.target.value);
                                        }}
                                    />
                                    {!isEmailValid && <p className="error-message invalid-text">Пожалуйста, введите корректный email</p>}
                                </div>
                                <div className="input__box pass-input__box">
                                    <input
                                        type={attr ? "text" : "password"}
                                        required
                                        name='password'
                                        placeholder='Придумайте пароль'
                                        autoComplete='off'
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            handlePasswordChange(e.target.value);
                                        }}
                                        className={!isPasswordValid ? "invalid" : "valid"}
                                    />
                                    <i className={attr ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"} onClick={() => setAttr(!attr)}></i>
                                    {!isPasswordValid && <p className="error-message invalid-text">Пароль должен быть длиной от 8 символов</p>}
                                </div>
                                <div className="input__box pass-repeat__input-box">
                                    <input
                                        type={attrRepeat ? "text" : "password"}
                                        required
                                        name='repeat-password'
                                        placeholder='Повторите пароль'
                                        value={repeatPassword}
                                        onChange={(e) => {
                                            setRepeatPassword(e.target.value);
                                            handleRepeatChange(e.target.value);
                                        }}
                                        className={!isRepeatValid ? "invalid" : "valid"}
                                    />
                                    {!isRepeatValid && <p className="error-message invalid-text">Пароли не совпадают!</p>}
                                    <i className={attrRepeat ? "ri-eye-off-line pass__show" : "ri-eye-line pass__show"} onClick={() => setAttrRepeat(!attrRepeat)}></i>
                                </div>
                            </div>
                            <button className="register__button" disabled={!(isEmailValid && isNameValid && isPasswordValid && isRepeatValid)}>
                                {isLoading ? <span className="loader"></span> : 'Зарегистрироваться'}
                            </button>
                            <div className="register__to-login">У вас уже есть аккаунт? <Link to="/login">Авторизуйтесь</Link></div>
                        </form>
                    </div>
                </div>
            )}
        </motion.div>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
    register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
