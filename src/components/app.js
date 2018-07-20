import React, { Component } from 'react';
import Navbar from './navigation';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}
