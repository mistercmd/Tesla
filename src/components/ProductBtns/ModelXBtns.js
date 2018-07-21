import React, { Component } from 'react';
import Button from '../button';

class ModelXButtons extends Component {
    render() {
        return (
            <div className="ProductBtns">
            <React.Fragment>
            <Button text="Order Now" className="DarkBtn"/>
            <Button text="Learn More" className="LightBtn"/>
            <Button text="Test Drive" className="LightBtn"/>
            <Button text="Shop Inventory" className="LightBtn"/>
            </React.Fragment>
            </div>
        )
    }
}

export default ModelXButtons;
