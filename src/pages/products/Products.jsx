import React from 'react';
import Product from '../../container/product/Product';

const Products = ({products}) => {
    return (
        <div>
            {products.map((product) => {
                <Product product={product} />
                // console.log(product)
            })} 
        </div>
    );
}

export default Products;
