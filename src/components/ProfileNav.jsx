import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import './UI/ProfileNav.css';

const ProfileNav = ({ profileActive, setProfileActive, username, balance, logout, isLoggedIn }) => {

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(logout()); // Вызываем action creator для выхода из системы
    }, [dispatch, logout]);

    return isLoggedIn ? (
        <div className={profileActive ? "profile active" : "profile"} onClick={() => setProfileActive(false)}>
            <div className={profileActive ? "profile__wrapper active" : "profile__wrapper"} onClick={e => e.stopPropagation()}>
                <i className="ri-close-line profile__close" onClick={() => setProfileActive(false)}></i>
                <div className="profile__user">
                    <div className="profile__avatar" style={{background: "url(https://i.imgur.com/aFiCpP4.jpg)"}}></div>
                    <div className="profile__info">
                        <div className="profile__item profile__name">
                            <i class="uil uil-user-circle profile__icon"></i> <span>{username}</span>
                        </div>
                        <div className="profile__item profile__balance">
                            <i class="fa-solid fa-wallet profile__icon"></i> <span>{balance} ₽</span>
                        </div>
                    </div>
                </div>

                <nav className="profile__nav">
                    <ui className="profile__nav-list">
                        <li className="profile__item profile__area">
                            <i class="ri-shield-user-line profile__icon"></i> <Link to="/area" className="profile__link" onClick={() => setProfileActive(false)}>Личный кабинет</Link>
                        </li>

                        <div className="profile__content">
                            <li className="profile__item">
                                <i class="uil uil-pen profile__icon"></i> <Link to="/area/changeProfile" className="profile__link" onClick={() => setProfileActive(false)}>Редактировать профиль</Link>
                            </li>
                            <li className="profile__item">
                                <i class="ri-home-4-line profile__icon"></i> <Link to="/" className="profile__link" onClick={() => setProfileActive(false)}>Главная</Link>
                            </li>
                            <li className="profile__item profile__replenish">
                                <i class="uil uil-usd-circle profile__icon"></i> <Link to="/balance" className="profile__link" onClick={() => setProfileActive(false)}>Пополнить баланс</Link>
                            </li>
                            <li className="profile__item">
                                <i class="ri-store-line profile__icon"></i> <Link to="/area#myProducts" className="profile__link" onClick={() => setProfileActive(false)}>Мои сборки</Link>
                            </li>
                            <li className="profile__item">
                                <i class="uil uil-apps profile__icon"></i> <Link to="/launcher" className="profile__link" onClick={() => setProfileActive(false)}>Получить лаунчер</Link>
                            </li>
                            <li className="profile__item">
                                <i class="ri-shopping-cart-line profile__icon"></i> <Link to="/#mods" className="profile__link" onClick={() => setProfileActive(false)}>Купить сборку</Link>
                            </li>
                            <li className="profile__item">
                                <i class="uil uil-shopping-bag profile__icon"></i> <Link to="/basket" className="profile__link" onClick={() => setProfileActive(false)}>Корзина</Link>
                            </li>
                            <li className="profile__item">
                                <i class="uil uil-vk profile__icon"></i> <Link to="https://vk.com/mikoshsborka" target="_blank" className="profile__link" onClick={() => setProfileActive(false)}>Группа ВК</Link>
                            </li>
                        </div>

                        <div className="profile__item profile__leave" onClick={() => setProfileActive(false)}>
                            <i class="uil uil-signout profile__icon"></i> <button onClick={onLogout}>Выйти</button>
                        </div>

                    </ui>
                </nav>
            </div>
        </div>
    ) : (
        <>
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);
