import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import './UI/ProfileNav.css';

const ProfileNav = ({ profileActive, setProfileActive, username, balance, logout, isLoggedIn }) => {

    useEffect(() => {
        if (!isLoggedIn) {
          setProfileActive(false);
        }
      }, [isLoggedIn, setProfileActive]);

    useEffect(() => {
        // Close on esc
        const handleEscapeKey = (event) => {
            if (event.keyCode === 27) {
                setProfileActive(false);
            }
        };
        window.addEventListener('keydown', handleEscapeKey);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [setProfileActive]);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout()); // Вызываем logout синхронно
        setProfileActive(false); // Закрываем профиль
    };

    return isLoggedIn ? (
        <div className={profileActive ? "profile active" : "profile"} onClick={() => setProfileActive(false)}>
            <div className={profileActive ? "profile__wrapper active" : "profile__wrapper"} onClick={e => e.stopPropagation()}>
                <i className="ri-close-line profile__close" onClick={() => setProfileActive(false)}></i>
                <div className="profile__user">
                    <div className="profile__avatar" style={{background: "url(https://i.imgur.com/aFiCpP4.jpg)"}}></div>
                    <div className="profile__info">
                        <div className="profile__item profile__name">
                            <i className="uil uil-user-circle profile__icon"></i> <span>{username}</span>
                        </div>
                        <div className="profile__item profile__balance">
                            <i className="fa-solid fa-wallet profile__icon"></i> <span>{balance} ₽</span>
                        </div>
                    </div>
                </div>

                <nav className="profile__nav">
                    <ul className="profile__nav-list">
                        <li className="profile__item profile__area">
                            <i className="ri-shield-user-line profile__icon"></i> <Link to="/area" className="profile__link" onClick={() => setProfileActive(false)}>Личный кабинет</Link>
                        </li>

                        <div className="profile__content">
                            <li className="profile__item">
                                <i className="ri-home-4-line profile__icon"></i> <Link to="/" className="profile__link" onClick={() => setProfileActive(false)}>Главная</Link>
                            </li>
                            <li className="profile__item">
                                <i className="uil uil-pen profile__icon"></i> <Link to="/area/changeProfile" className="profile__link" onClick={() => setProfileActive(false)}>Редактировать профиль</Link>
                            </li>
                            <li className="profile__item profile__replenish">
                                <i className="uil uil-usd-circle profile__icon"></i> <Link to="/balance" className="profile__link" onClick={() => setProfileActive(false)}>Пополнить баланс</Link>
                            </li>
                            <li className="profile__item">
                                <i className="ri-store-line profile__icon"></i> <Link to="/area#myProducts" className="profile__link" onClick={() => setProfileActive(false)}>Мои сборки</Link>
                            </li>
                            <li className="profile__item">
                                <i className="uil uil-apps profile__icon"></i> <Link to="/launcher" className="profile__link" onClick={() => setProfileActive(false)}>Получить лаунчер</Link>
                            </li>
                            <li className="profile__item">
                                <i className="ri-shopping-cart-line profile__icon"></i> <Link to="/#mods" className="profile__link" onClick={() => setProfileActive(false)}>Купить сборку</Link>
                            </li>
                            <li className="profile__item">
                                <i className="uil uil-shopping-bag profile__icon"></i> <Link to="/basket" className="profile__link" onClick={() => setProfileActive(false)}>Корзина</Link>
                            </li>
                            <li className="profile__item">
                                <i className="uil uil-vk profile__icon"></i> <Link to="https://vk.com/mikoshsborka" target="_blank" className="profile__link" onClick={() => setProfileActive(false)}>Группа ВК</Link>
                            </li>
                        </div>

                        <div className="profile__item profile__leave">
                          <i className="uil uil-signout profile__icon"></i> <button onClick={handleLogout}>Выйти</button>
                        </div>

                    </ul>
                </nav>
            </div>
        </div>
    ) : null;
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);
