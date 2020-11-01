import React, { Component } from 'react';

import '../assets/css_modules/header.scss';

import NavBar from './navbar';
import Slideshow from './slideshow';

class Header extends Component {
    state = {  }

    

    render() { 
        return ( 
            <div className = "header-container">
                <NavBar/>
                <Slideshow/>
            </div>
         );
    }
}
 
export default Header;