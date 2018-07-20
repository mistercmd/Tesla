import React, { Component } from 'react';
import Navbar from './navigation';
import Footer from './footer';
import Products from './products';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Products title="Model-3" productTitle="Model 3" productSubtitle="The car of the future" imageLink="" text=""/>
        <Footer/>
      </div>
    );
  }
}
