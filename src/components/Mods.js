import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './UI/Mods.module.css'
import ProductsError from '../container/product/productsError';

const Mods = ({products}) => {

    const [errorActive, setErrorActive] = useState(false);

    return (
        <div>
            <ProductsError active={errorActive} setActive={setErrorActive}/>

            <div className={styles.mods__content}>
                {products.map((product) => (
                    <Link to="products" className={styles.mods__item} style={{background: `url(${product.modsImgSrc})`}} key={product.id}>
                        <Link to="products" className={styles.mods__info}>Подробнее</Link>
                        <div className={styles.mods__itemContent}>
                            <div className={styles.mods__itemInfo}>
                                <div className={styles.mods__name}>{product.name}</div>
                                <div className={styles.mods__price}>Цена: {product.price} руб</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Mods;
