import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollUp from "../components/ScrollUp";
import Edge from "../components/Edge";
import Questions from '../components/Questions';
import Section from '../components/Section';
import Footer from '../components/Footer';
import ScrollReveal from 'scrollreveal';


const MainPage = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.revealleft-item, .about__content, .edge__item, .footer__header .header__logo', {
        duration: 1000,
        distance: '30px',
        delay: 200,
        opacity: 0,
        origin: 'left',
        interval: 300,
        scale: 1,
        easing: 'ease-in-out',
    });
    sr.reveal('.revealtop-item, .section__title, .section__subtitle, .section__desc, .questions__item', {
        duration: 1000,
        distance: '30px',
        delay: 200,
        opacity: 0,
        origin: 'top',
        interval: 300,
        scale: 1,
        easing: 'ease-in-out',
    });
    sr.reveal('.intro__image, .about__image, .footer__header .nav__item', {
        duration: 1000,
        distance: '30px',
        delay: 500,
        opacity: 0,
        origin: 'right',
        interval: 100,
        scale: 1,
        easing: 'ease-in-out',
    });
  }, []);

    return (
        <div>
            <main className="main">
                {/* Intro */}
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
                </section>
                {/* About */}
                <section className="about" id="about">
                    <div className="about__inner">
                        <div className="about__content">
                            <h2 className="section__title about__title revealleft-item">О нас</h2>
                            <h3 className="section__subtitle revealleft-item">О нашей платформе</h3>
                            <p className="section__desc revealleft-item">
                                Здесь вы можете узнать больше подробностей о нас
                            </p>

                            <p className="about__desc">
                                Мы - крупная платформа, которая делает уникальные модификации
                                для игры RADMIR CRMP. Наши модификации - это основная часть
                                нашей платформы. Они из себя представляют: Уникальный HUD и
                                интерфейсы, над которыми делаются большие работы, и
                                дизайнерские, и исполняющие, далее полезные скрипты, каждый из
                                них был проверен лично нами. Каждый скрипт или компонент можно
                                выбрать в нашем лаунчере при установке. Наша платформа
                                представляет из себя: Данный сайт, через который можно
                                приобрести сборку и узнать подробнее о нас, и многое другое.
                                Лаунчер, через который можно установить сборку и там же
                                запустить её. Также наши модификации, которые являются лицом
                                нашей платформы.
                            </p>
                        </div>
                        <div className="about__image">
                            <img
                                src="https://i.imgur.com/PmdEslw.jpg"
                                alt=""
                                className="about__img"
                            />
                        </div>
                    </div>
                </section>

                {/* Mods */}
                <section className="mods" id="mods">
                    <div className="mods__inner">
                        <Section
                            title="Модификации"
                            subtitle="Наши основные модификации"
                            desc="Здесь вы можете приобрести или узнать подробнее о сборке"
                        />
                        <div className="mods__content">
                            <div className="mods-item black-capture revealtop-item">
                                <img
                                    src="https://i.ibb.co/R7QCmX8/Black-Capture.jpg"
                                    alt=""
                                    className="mods-img"
                                />
                                <div className="mods__name">Black Capture</div>
                                <div className="mods__price">Цена: 300 руб</div>
                                <Link to="products/black-capture" className="mods__button">
                                    Подробнее
                                </Link>
                            </div>
                            <div className="mods-item cyber-radmir revealtop-item">
                                <img
                                    src="https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg"
                                    alt=""
                                    className="mods-img"
                                />
                                <div className="mods__name">Cyber Radmir</div>
                                <div className="mods__price">Цена: 300 руб</div>
                                <Link to="products/cyber-radmir" className="mods__button">
                                    Подробнее
                                </Link>
                            </div>
                            <div className="mods-item sborka-na-zakaz revealtop-item">
                                <img
                                    src="https://i.ibb.co/RcQyvBn/image.jpg"
                                    alt=""
                                    className="mods-img"
                                />
                                <div className="mods__name">Сборка на заказ</div>
                                <div className="mods__price">Цена: 600 руб</div>
                                <Link to="products/sborka-na-zakaz" className="mods__button">
                                    Подробнее
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Edge */}
                <section className="edge" id="edge">
                    <div className="edge__inner">
                        <Section
                            title="Преимущества"
                            subtitle="Наши преимущества"
                            desc="Качества нашей платформы и преимущества"
                        />
                        <Edge />
                    </div>
                </section>

                {/* Questions */}

                <section className="questions" id="questions">
                    <div className="questions__inner">
                        <Section
                            title="Вопросы"
                            subtitle="Частые вопросы"
                            desc="Здесь вы можете найти ответы на частые вопросы"
                        />
                        <Questions />
                    </div>
                </section>

                {/* Contacts */}
                <section className="contacts" id="contacts">
                    <Section
                            title="Контакты"
                            subtitle="Наши соц.сети"
                            desc="Здесь вы можете узнать про наши соц.сети"
                    />
                    <div className="contacts__content">
                        <a
                            href="https://www.youtube.com/channel/UCqtFnLj9HAzFzcc8loTzVFw"
                            target="_blank"
                            rel="noreferrer"
                            className="contacts__button revealleft-item"
                        >
                            YouTube
                        </a>
                        <a
                            href="https://vk.com/mikoshsborka"
                            target="_blank"
                            rel="noreferrer"
                            className="contacts__button revealleft-item"
                        >
                            ВКонтакте
                        </a>
                        <a
                            href="https://t.me/mikoshsborka"
                            target="_blank"
                            rel="noreferrer"
                            className="contacts__button revealleft-item"
                        >
                            Telegram
                        </a>
                    </div>
                </section>
            </main>
            
            <Footer/>

            <ScrollUp />
        </div>
    );
};

export { MainPage };
