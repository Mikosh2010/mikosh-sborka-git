import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './UI/header.css';

function Header() {

    // Active navLink
    useEffect(() => {
        const scrollActive = () => {
            const scrollY = window.pageYOffset

            const sections = document.querySelectorAll('section[id]')

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id')

                const sectionsClass = document.querySelector(`.nav a[href*=${sectionId}]`)

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link')
                } else {
                    sectionsClass.classList.remove('active-link')
                }
            })
        }

        window.addEventListener('scroll', scrollActive)

        return () => {
            window.removeEventListener('scroll', scrollActive)
        }
    }, [])

    // Fixed Header
    useEffect(() => {
        function fixedHeader() {
          if (window.scrollY >= 50) {
            setFixed(true);
          } else {
            setFixed(false);
          }
        }
    
        window.addEventListener('scroll', fixedHeader);
        window.removeEventListener('load', fixedHeader);
    
        return () => {
          window.removeEventListener('scroll', fixedHeader);
        };
      }, []);
    
      const [fixed, setFixed] = React.useState(false);
      const [navActive, setNavActive] = React.useState(false);

    return (
        <header className={fixed ? "header fixed" : "header"} id="header">
            <Link to="https://vk.com/mikoshsborka" target={"_blank"} rel="noreferrer">
                <img src="https://i.imgur.com/eOFD2Pz.png" alt="" className="header__logo"/>
            </Link>
            <nav className={navActive ? "nav active" : "nav"} id="nav-menu">
                <ul className="nav__list">
                    <Link to="/" className="nav__item" onClick={() => setNavActive(!navActive)}>
                        <i className="uil uil-estate nav__icon"></i><div className="nav__link">Главная</div>
                    </Link>
                    <a href="#about" className="nav__item" onClick={() => setNavActive(!navActive)}>
                        <i className="uil uil-user nav__icon"></i><div className="nav__link">О нас</div>
                    </a>
                    <a href="#mods" className="nav__item" onClick={() => setNavActive(!navActive)}>
                        <i className="uil uil-file-alt nav__icon"></i><div className="nav__link">Сборки</div>
                    </a>
                    <a href="#edge" className="nav__item" onClick={() => setNavActive(!navActive)}>
                        <i className="uil uil-scenery nav__icon"></i><div className="nav__link">Качества</div>
                    </a>
                    <a href="#questions" className="nav__item" onClick={() => setNavActive(!navActive)}>
                        <i className="uil uil-question-circle nav__icon"></i><div className="nav__link">Вопросы</div>
                    </a>
                    <a href="#contacts" className="nav__item" onClick={() => setNavActive(!navActive)}>
                        <i className="uil uil-message nav__icon"></i><div className="nav__link">Контакты</div>
                    </a>
                    <Link to="/" className="personal-area" style={{display: 'none'}}>
                        <i className="uil uil-user-circle nav__area-icon"></i><div className="nav__link">Личный кабинет</div>
                    </Link>
                    <NavLink to="/login" className="login__link">
                        <div className="nav__link">Войти</div>
                    </NavLink>
                    <NavLink to="/register" className="register__link">
                        <div className="nav__link">Регистрация</div>
                    </NavLink>
                </ul>
                <i className="uil uil-times nav__close" id="nav-close" onClick={() => setNavActive(!navActive)}></i>
            </nav>
            <div className="nav__btns">
                <div className="nav__toggle" id="nav-toggle" onClick={() => setNavActive(!navActive)}>
                    <i className="uil uil-apps"></i>
                </div>
            </div>
        </header>
    );
};

export default Header;