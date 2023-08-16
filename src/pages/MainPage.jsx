import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollUp from "../components/ScrollUp";
import Edge from "../components/Edge";
import Questions from '../components/Questions';
import Section from '../components/Section';
import Footer from '../components/Footer';
import ScrollReveal from 'scrollreveal';
import Mods from '../components/Mods';
import Intro from '../components/Intro';


const MainPage = ({products}) => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.revealleft-item, .questions__item, .about__content, .footer__header .header__logo', {
        duration: 1500,
        distance: '30px',
        delay: 200,
        opacity: 0,
        origin: 'left',
        interval: 150,
    });
    sr.reveal('.contacts__button, .section__title, .section__subtitle, .section__desc', {
        duration: 1500,
        distance: '30px',
        delay: 200,
        opacity: 0,
        origin: 'top',
        interval: 150,
    });
    sr.reveal('.Mods_mods__item__6oWnW', {
        duration: 1500,
        distance: '30px',
        delay: 1000,
        opacity: 0,
        origin: 'top',
        interval: 300,
    });
    sr.reveal('.edge__item', {
        duration: 1500,
        distance: '30px',
        delay: 200,
        opacity: 0,
        origin: 'bottom',
        interval: 150,
    });
    sr.reveal('.intro__image, .footer__header .nav__item', {
        duration: 2000,
        distance: '40px',
        delay: 1000,
        opacity: 0,
        origin: 'right',
        interval: 100,
    });
  }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <main className="main">
                
                <Intro />

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
                        <Mods products={products}/>
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
                            className="contacts__button"
                        >
                            YouTube
                        </a>
                        <a
                            href="https://vk.com/mikoshsborka"
                            target="_blank"
                            rel="noreferrer"
                            className="contacts__button"
                        >
                            ВКонтакте
                        </a>
                        <a
                            href="https://t.me/mikoshsborka"
                            target="_blank"
                            rel="noreferrer"
                            className="contacts__button"
                        >
                            Telegram
                        </a>
                    </div>
                </section>
            </main>
            
            <Footer/>

            <ScrollUp />
        </motion.div>
    );
};

export { MainPage };
