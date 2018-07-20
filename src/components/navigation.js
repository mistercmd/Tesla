import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar__logo">
                    <img src="https://i.imgur.com/6eok6By.png" alt="Tesla logo" title="Tesla, Inc."/>
                </div>

                <div className="navbar__vehicles">
                        <p><a href="">Model S</a></p>
                        <p><a href="">Model X</a></p>
                        <p><a href="">Model 3</a></p>
                        <p><a href="">Roadster</a></p>
                        <p><a href="">Energy</a></p>
                </div>

                <div className="navbar__info">
                <ul className="navbar__info__links">
                        <li><a href="" title="Get Tesla">Get Newsletter</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Sign In</a></li>
                        <li>{/*Insert fas fa bars*/}</li>

                    </ul>
                </div>

            </div>
        )
    }
}

export default Navbar;