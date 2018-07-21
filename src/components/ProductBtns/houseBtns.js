import React, { Component } from 'react';
import Button from '../button';

class HouseButtons extends Component {
    render() {
        return (
            <div className="ProductBtns">
            <React.Fragment>
            <Button text="Learn More" className="DarkBtn"/>
            <Button text="Request a Quote" className="LightBtn"/>
            </React.Fragment>
            </div>
        )
    }
}

export default HouseButtons;