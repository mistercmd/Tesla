import React, { Component } from 'react';
import Button from '../button';

class ModelSButtons extends Component {
    render() {
        return (
            <React.Fragment>
            <Button text="Order Now" className="DarkBtn"/>
            <Button text="Learn More" className="LightBtn"/>
            <Button text="Test Drive" className="LightBtn"/>
            <Button text="Shop Inventory" className="LightBtn"/>
            </React.Fragment>
        )
    }
}

export default ModelSButtons;