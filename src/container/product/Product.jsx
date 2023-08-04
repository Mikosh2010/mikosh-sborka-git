import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UI/styles.css';
import activeStar from './img/rating-star.svg';
import inactiveStar from './img/rating-star-inactive.svg';
import ProductsError from './productsError';

const Products = ({ products }) => {
    
    const [errorActive, setErrorActive] = useState(false);

    // Обновите переменную с productsId на productId
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    const [displayImage, setDisplayImage] = useState(() => {
        if (product && product.images && product.images.length > 0) {
            return product.images[0].src;
        } else {
            return null;
        }
    });

    useEffect(() => {
        // Update displayImage when the selected product changes
        if (product && product.images && product.images.length > 0) {
            setDisplayImage(product.images[0].src);
        }
    }, [product]);

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    console.log(products);

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div className="modal">
            <ProductsError active={errorActive} setActive={setErrorActive} />

            <div className="modal__item" key={product.id}>
                <div className="modal__wrapper">
                    <div className="modal__pictures">
                        <img src={displayImage} alt="" className="modal__display" />
                    </div>
                    <div className="modal__content">
                        <div className="modal__info">
                            <h3 className="modal__title">{product.name}</h3>
                            <h4 className="modal__price">Цена: {product.price} ₽</h4>
                            <div className="modal__rating">
                                <span>Оценки пользователей:</span>
                                <div className="modal__rating-row">
                                    <img src={activeStar} alt='' className="black__wanted-active" />
                                    <img src={activeStar} alt='' className="black__wanted-active" />
                                    <img src={activeStar} alt='' className="black__wanted-active" />
                                    <img src={inactiveStar} alt="" className="black__wanted-inactive" />
                                    <img src={inactiveStar} alt="" className="black__wanted-inactive" />
                                    <img src={inactiveStar} alt="" className="black__wanted-inactive" />
                                </div>
                            </div>
                            <a href="https://www.youtube.com/watch?v=sWeEmIVbF8M" className="modal__review" target="_blank" rel="noreferrer">ОБЗОР НА СБОРКУ</a>
                        </div>
                        <button className="modal__button" onClick={() => setErrorActive(true)}>Купить</button>
                    </div>
                </div>
                <div className="modal__images">
                    <div className="modal__pagination">
                        {product.images.map((image, index) => (
                            <div className="modal__image" key={index} style={{ background: `url(${image.src})` }} onClick={() => setDisplayImage(image.src)}>{index}</div>
                        ))}
                    </div>
                </div>
                <div className="modal__desc-title">Описание модификаций</div>
                <div className="modal__desc">{product.desc}</div>
            </div>
        </div>
    );
}

export default Products;
