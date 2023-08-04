import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer__header">
                    <img
                        src="https://i.imgur.com/eOFD2Pz.png"
                        alt=""
                        className="header__logo"
                    />
                    <nav className="nav" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#intro" className="nav__link">
                                    Главная
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    О нас
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#mods" className="nav__link">
                                    Модификации
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#edge" className="nav__link">
                                    Качества
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#questions" className="nav__link">
                                    Вопросы
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__copyright">Copyright by Mikosh Sborka</div>
            </footer>
        </div>
    );
}

export default Footer;
