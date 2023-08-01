import React from 'react';
import { Link } from 'react-router-dom';
import './UI/error.css';

const ProductsError = ({active, setActive}) => {

    return (
        <div>
            <div className={active ? "error active" : "error"} onClick={() => setActive(false)}>
                <div className={active ? "error__wrapper active" : "error__wrapper"} onClick={e => e.stopPropagation()}>
                    <i className="ri-close-line error__close" onClick={() => setActive(false)}></i>

                    <i className="ri-close-line error__icon"></i>
                    <h3 className="error__title">Ошибка!</h3>
                    <p className="error__subtitle">
                        Вы не авторизованы на нашем сайте! Перед покупкой сборки, необходимо зарегистрироваться. 
                    </p>
                    <Link to="/register" className="error__button">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductsError;
