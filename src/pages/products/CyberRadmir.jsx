import React, { useState } from 'react';
import './UI/CyberRadmir.css';
import './UI/styles.css';
import activeStar from './img/rating-star.svg';
import inactiveStar from './img/rating-star-inactive.svg';

const CyberRadmir = () => {

    const [displayImage, setDisplayImage] = useState();
    const [show, setShow] = useState();

    const handleClick = (src) => {
        setDisplayImage(src);
    };

    if (!displayImage) {
        setDisplayImage("https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg");
    }

    return (
        <div>
            <div class="modal">
                <div class="modal__item">
                    <div class="modal__pictures">
                        <img src={displayImage} alt="" class="modal__display" />
                        <div class="modal__images">
                            <div class="modal__pagination">
                                {images.map((image) => (
                                    <div class="modal__image">
                                        <img src={image.src} alt="" class="modal__img" onClick={() => handleClick(image.src)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="modal__content">
                        <h3 class="modal__title">Cyber Radmir</h3>
                        <h4 class="modal__price">Цена: 300 ₽</h4>
                        <a href="#" class="modal__button">Купить</a>
                        <div class="modal__rating">
                            <span>Оценки пользователей:</span>
                            <div class="modal__rating-row">
                                <img src={activeStar} class="black__wanted-active" />
                                <img src={activeStar} class="black__wanted-active" />
                                <img src={activeStar} class="black__wanted-active" />
                                <img src={inactiveStar} alt="" class="black__wanted-inactive" />
                                <img src={inactiveStar} alt="" class="black__wanted-inactive" />
                                <img src={inactiveStar} alt="" class="black__wanted-inactive" />
                            </div>
                        </div>
                        <a href="https://www.youtube.com/watch?v=sWeEmIVbF8M" class="modal__review" target="_blank">ОБЗОР НА СБОРКУ</a>
                        <div class="modal__desc">
                            Сборка CyberRadmir предназначена для Radmir RP | CRMP версии и не работает на других ресурсах проекта. (Мой дом, RADMIR MTA и т.д)
                            <br />
                            <br />
                            Сборка CyberRadmir содержит:
                            <br />
                            Полностью заменённый HUD
                            <br />
                            Полностью заменённые Интерфейсы
                            <br />
                            Заменённые звуки выстрелов и т.д (GENRL)
                            <br />
                            Заменённые звуки заведения машины и т.д
                            <br />
                            <br />
                            Демонстрацию вышеперечисленного можно посмотреть в картинках рядом
                            <br />
                            <br />
                            <a href="https://vk.com/mikoshsborka" class="button">ПОЛНАЯ ИНФОРМАЦИЯ</a>
                            <br />
                            <br />
                            Автор сборки не имеет ответственности за свой товар. Потому что в сборке имеются скрипты которые сделаны не автором сборки, а которые взяты из других платформ, и делали их другие люди. Поэтому подключайте к своему аккаунту Google Authenticator.

                            Полная информация о сборке

                            HUD С радаром вверху и обычным радаром прикреплён в фотографиях товара.

                            За любыми вопросами - <a href="https://vk.com/mikoshsborka" class="link" target="_blank">ЛС ГРУППЫ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const images = [
    {
        src: "https://i.ibb.co/dJhv51J/Cyber-Radmir.jpg"
    },
    {
        src: "https://i.ibb.co/R7QCmX8/Black-Capture.jpg"
    },
    {
        src: "https://i.ibb.co/RcQyvBn/image.jpg"
    },
    {
        src: "https://i.ibb.co/RcQyvBn/image.jpg"
    }
]

export { CyberRadmir };
