import React from 'react';
import './UI/Intro.css';

const Intro = () => {
    return (
        <div>
            <section className="intro" id="intro">
                <div className="header__image">
                    <img src="https://i.ibb.co/NmR8ZTS/logo.png" alt="" />
                </div>
                <div className="intro__wrapper">
                    <div className="intro__content revealleft-item">
                        <h1 className="intro__title">MIKOSH SBORKA</h1>
                        <h3 className="intro__subtitle">
                            Платформа по созданию модификаций (сборок) для игры в RADMIR
                            CRMP.
                        </h3>
                        <p className="intro__desc">
                            Наши модификации представляют: уникальные интерфейсы, и полезные
                            скрипты которые обеспечивают приятную и удобную игру в RADMIR
                            CRMP.
                        </p>
                        <a href="#mods" className="intro__button">
                            Купить сборку
                        </a>
                    </div>
                    <div className="intro__image">
                        <img
                            src="https://i.imgur.com/MowuLSh.png"
                            alt=""
                            className="intro__img"
                        />
                    </div>
                </div>

                
                <div className="stars-bg">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>
            </section>
        </div>
    );
}

export default Intro;
