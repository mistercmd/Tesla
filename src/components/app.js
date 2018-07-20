import React, { Component } from 'react';
import Navbar from './navigation';
import Footer from './footer';
import Products from './products';
import Model3Buttons from './ProductBtns/Model3Btns';
import ModelSButtons from './ProductBtns/ModelSBtns';
import ModelXButtons from './ProductBtns/ModelXBtns';
import HouseButtons from './ProductBtns/houseBtns';

export default class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="top">
        <Navbar/> 
        <Products title="Model-3" productTitle="Model 3" productSubtitle="The car of the future" imageLink="https://i.imgur.com/wka19d9.jpg"/>
        <Model3Buttons/>
        </div>
        <div className="middle-top">
        <Products title="Model-S" productTitle="Model S" productSubtitle="The quickest car on the road" imageLink="https://i.imgur.com/ArqgT6B.jpg"/>
        <ModelSButtons/>
        </div>
        <div className="middle-bottom">
        <Products title="Model-X" productTitle="Model X" productSubtitle="The safest SUV ever" imageLink="https://i.imgur.com/erlyOVy.jpg"/>
        <ModelXButtons/>
        </div>
        <div className="bottom">
        <Products title="House" productTitle="Power Everything" productSubtitle="Solar and Powerwall" imageLink="https://i.imgur.com/HKX6UI7.jpg"/>
        <HouseButtons/>
        <Footer/>
        </div>
      </div>
    );
  }
}
