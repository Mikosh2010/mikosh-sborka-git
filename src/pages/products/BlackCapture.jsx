import React, { useState } from 'react';
import './UI/styles.css';
import './UI/BlackCapture.css';
import activeStar from './img/rating-star.svg';
import inactiveStar from './img/rating-star-inactive.svg';
import ProductsError from './productsError';

const BlackCapture = () => {

    const [displayImage, setDisplayImage] = useState();
    const [show, setShow] = useState();
    const [errorActive, setErrorActive] = useState(false);

    const handleClick = (src) => {
      setDisplayImage(src);
    };

    if (!displayImage) {
        setDisplayImage("https://i.ibb.co/R7QCmX8/Black-Capture.jpg");
    };

    return (
    <div class="modal">

        <ProductsError active={errorActive} setActive={setErrorActive}/>

        <div class="modal__item">
            <div class="modal__pictures">
                <img src={displayImage} alt="" class="modal__display"/>
                <div class="modal__images">
                    <div class="modal__pagination">
                        {images.map((image) => (
                            <div class="modal__image">
                                <img src={image.src} alt="" class="modal__img" onClick={() => handleClick(image.src)}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="modal__content">
                <h3 class="modal__title">Black Capture</h3>
                <h4 class="modal__price">Цена: 300 ₽</h4>
                <button class="modal__button" onClick={() => setErrorActive(true)}>Купить</button>
                <div class="modal__rating">
                    <span>Оценки пользователей:</span>
                    <div class="modal__rating-row">
                        <img src={activeStar} class="black__wanted-active"/>
                        <img src={activeStar} class="black__wanted-active"/>
                        <img src={activeStar} class="black__wanted-active"/>
                        <img src={inactiveStar} alt="" class="black__wanted-inactive"/>
                        <img src={inactiveStar} alt="" class="black__wanted-inactive"/>
                        <img src={inactiveStar} alt="" class="black__wanted-inactive"/>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=sWeEmIVbF8M" class="modal__review" target="_blank">ОБЗОР НА СБОРКУ</a>
                <div class={show ? "modal__desc showed" : "modal__desc"}>
                    <div class="title">КАПТ сборка для Radmir RP. С ней вы будете выигрывать все капты.</div>
                    <br/>
                    <div class="title">Скрипты которые находятся в сборке:</div>
                    <br/>
                    <div class="title">CLEO:</div>
                    <br/>
                    CrosshairFix - Фиксация прицела (/cy | /cx)
                    <br/>
                    DMG INFORMER 2 - Информация о нанесении урона (+ колокольчик)
                    <br/>
                    Fast_Q - Моментальный выход из игры (/q)
                    <br/>
                    GammaFixByDarkP1xel - Устанавливает яркость игры на ту что была поставлена вами
                    <br/>
                    hnnssy_date_and_time - Точное время
                    <br/>
                    memory_full - Использует всю оперативную память на вашем устройстве
                    <br/>
                    Reconnect - перезаход без выхода из игры (/rec)
                    <br/>
                    TimeWeather - Установка погоды и времени (/st | /sw)
                    <br/>
                    WhiteNicksIds - Устанавливает ID белого цвета независимо от цвета ника
                    <br/>
                    AntiBH - Убирает падание при прыжке с быстрым бегом
                    <br/>
                    Alocker + FastRem - Позволяет открывать машину с сочетаний клавиш Alt + 1, надевает ремень
                    безопасности
                    автоматически при входе в транспорт
                    <br/>
                    DFL Editor by Dapo Show - Можно редактировать прорисовку/лоды/туман что прибавляет FPS)
                    <br/>
                    pricel - При наведении прицелом на игрока белые части прицела становятся красными
                    <br/>
                    NoAnimationMoney - отключает анимацию подсчёта денег при заходе в игру
                    <br/>
                    <div class="title">ASI:</div>
                    <br/>
                    colormod - Устанавливает малозанимающую графику которая не забирает FPS
                    <br/>
                    crashes - Отключает лимит FPS
                    <br/>
                    MapZoomFixer - Исправляет движение карты
                    <br/>
                    radarrect - делает радар квадратным
                    <br/>
                    RefreshRateFixByDarkP1xel32 - устанавливает герцовку которая стоит на вашем мониторе
                    <br/>
                    SensFix - Устанавливает плавную чувствительность мыши, и при прицеливании стабилизирует
                    чувствительность.
                    <br/>
                    <br/>
                    <div class="title">Прочие скрипты:</div>
                    <br/>
                    TimeCyc - Устанавливает красивое небо с облаками
                    <br/>
                    effects - Заменяет эффекты крови и выстрела
                    <br/>
                </div>
                <button class="show-all" onClick={() => setShow(!show)}>ПОКАЗАТЬ ВСЁ</button>
            </div>
        </div>
    </div>
    );
}

const images = [
    {
        src: "https://i.ibb.co/R7QCmX8/Black-Capture.jpg"
    },
    {
        src: "https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg"
    },
    {
        src: "https://i.ibb.co/RcQyvBn/image.jpg"
    },
    {
        src: "https://i.ibb.co/RcQyvBn/image.jpg"
    }
]

export { BlackCapture };
