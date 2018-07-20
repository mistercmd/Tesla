import React, { Component } from 'react';
import Button from './button';


const Products = ({ title, productTitle, productSubtitle, imageLink, text }) => {
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

            <Button text={text}/>
        </div>
    )
}

export default Products;