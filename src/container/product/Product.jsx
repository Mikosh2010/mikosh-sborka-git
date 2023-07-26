import React from 'react';

const Product = ({product}) => {
    console.log(product)
    return (
        <div>
            <div>{product.id}</div>
            <div>{product.name}</div>
        </div>
    );
}

export default Product;
