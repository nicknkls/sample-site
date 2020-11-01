import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../assets/css_modules/navbar.scss';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div id = "navbar-container">
                <Navbar id="navbar" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Page 2</Nav.Link>
                        </Nav>
                        <a href=""><FontAwesomeIcon icon={faSearch}/></a>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default NavBar;