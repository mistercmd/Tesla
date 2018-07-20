import React, { Component } from 'react';
import houseBtns from './ProductBtns/houseBtns';
import Model3Btns from './ProductBtns/Model3Btns';
import ModelSBtns from './ProductBtns/ModelSBtns';
import ModelXBtns from './ProductBtns/ModelXBtns';


const Products = ({ title, productTitle, productSubtitle, imageLink, btn }) => {
    return (
        <div>

            <div className="product-background">
                <img src={imageLink}/>
            </div>

            <div className={title}>
                <h1>{productTitle}</h1>
            </div>

            <div>
                <p>{productSubtitle}</p>
            </div>
            
        </div>
    )
}

export default Products;