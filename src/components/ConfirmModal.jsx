import React from 'react';
import './UI/ConfirmModal.css';

const ConfirmModal = ({ isEmailConfirmed }) => {

    return (
        <div>
            <div className={isEmailConfirmed ? "confirm active" : "confirm"}>
                <div className={isEmailConfirmed ? "confirm__wrapper active" : "confirm_++_wrapper"}>
                    <i className="ri-check-line confirm__icon"></i>
                    <div className="confirm__title">Вы почти у цели!</div>
                    <div className="confirm__subtitle">Осталось совсем чу-чуть!</div>
                    <p className="confirm__desc">
                        Для завершения регистрации, вы должны подтвердить свой Email. Вам должно придти сообщение, где будет кнопка подтверждения. Просто нажмите на неё и всё, готово! Не забудьте проверить Спам!
                    </p>
                    <a href="https://mail.ru/" target='_blank' rel='noopener noreferrer' className='confirm__button'>Перейти в MAIL</a>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
