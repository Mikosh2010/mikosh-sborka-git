import React, { useState } from 'react';
import './UI/styles.css';
import './UI/BlackCapture.css';
import activeStar from './img/rating-star.svg';
import inactiveStar from './img/rating-star-inactive.svg';
import ShowDesc from './showDesc';
import ProductsError from './productsError';

const Product = ({product}) => {

    const [displayImage, setDisplayImage] = useState();
    const [show, setShow] = useState();
    const [errorActive, setErrorActive] = useState(false);
    
    if (!displayImage) {
        setDisplayImage(product.images[0].src);
    };

    return (
    <div className="modal">

        <ShowDesc active={show} setActive={setShow} product={product}/>
        <ProductsError active={errorActive} setActive={setErrorActive}/>

        <div className="modal__item" key={product.id}>
            <div className="modal__pictures">
                <img src={displayImage} alt="" className="modal__display"/>
                <div className="modal__images">
                    <div className="modal__pagination">
                        {product.images.map((image) => (
                            <div className="modal__image" style={{background: `url(${image.src})`}} onClick={() => setDisplayImage(image.src)}></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="modal__content">
                <h3 className="modal__title">{product.name}</h3>
                <h4 className="modal__price">Цена: {product.price} ₽</h4>
                <button className="modal__button" onClick={() => setErrorActive(true)}>Купить</button>
                <div className="modal__rating">
                    <span>Оценки пользователей:</span>
                    <div className="modal__rating-row">
                        <img src={activeStar} alt='' className="black__wanted-active"/>
                        <img src={activeStar} alt='' className="black__wanted-active"/>
                        <img src={activeStar} alt='' className="black__wanted-active"/>
                        <img src={inactiveStar} alt="" className="black__wanted-inactive"/>
                        <img src={inactiveStar} alt="" className="black__wanted-inactive"/>
                        <img src={inactiveStar} alt="" className="black__wanted-inactive"/>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=sWeEmIVbF8M" className="modal__review" target="_blank" rel="noreferrer">ОБЗОР НА СБОРКУ</a>
                <div className="modal__desc">{product.desc}</div>
                <button className="show-all" onClick={() => setShow(!show)}>ПОКАЗАТЬ ВСЁ</button>
            </div>
        </div>
    </div>
    );
}

export default Product;
