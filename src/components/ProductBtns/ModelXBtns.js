import React, { Component } from 'react';
import Button from '../button';

class ModelXButtons extends Component {
    render() {
        return (
            <React.Fragment>
            <Button text="Order Now" className=""/>
            <Button text="Learn More" className=""/>
            <Button text="Test Drive" className=""/>
            <Button text="Shop Inventory" className=""/>
            </React.Fragment>
        )
    }
}

export default ModelXButtons;
