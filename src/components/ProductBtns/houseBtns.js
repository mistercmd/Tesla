import React, { Component } from 'react';
import Button from '../button';

class HouseButtons extends Component {
    render() {
        return (
            <React.Fragment>
            <Button text="Learn More" className="DarkBtn"/>
            <Button text="Request a Quote" className="LightBtn"/>
            </React.Fragment>
        )
    }
}

export default HouseButtons;