import React, { Component } from 'react';


const Products = (title, productTitle, productSubtitle, imageLink) => {
    return (
        <div>

            <div className="product-background">
                <img src={imageLink}/>
            </div>

            <div className={title}>
                <h1>{productTitle}</h1>
            </div>

            <div>
                <h3>{productSubtitle}</h3>
            </div>
        </div>
    )
}