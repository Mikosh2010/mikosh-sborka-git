import React from 'react';
import { useDispatch } from 'react-redux'; // Убираем функцию connect
import './UI/ErrorModal.css';

import { hideErrorModal } from '../actions/authActions';

const ErrorModal = ({ text }) => { // Убираем hideErrorModal из пропсов

    const dispatch = useDispatch();

    const handleCloseClick = () => {
        dispatch(hideErrorModal());
    };

    return (
        <div>
            <div className="error-modal">
                <div className="error-modal__wrapper">
                    <i className="ri-close-line error-modal__close" onClick={handleCloseClick}></i>
                    <i className="ri-close-line error-modal__icon"></i>
                    <h3 className="error-modal__title">Ошибка!</h3>
                    <p className="error-modal__subtitle">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;