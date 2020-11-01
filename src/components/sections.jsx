import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import FirstSection from './firstSection';
import SecondSection from './secondSection';

import 'bootstrap/dist/css/bootstrap.min.css';  
import '../assets/css_modules/sections.scss';


class Sections extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "sections-container">
                <h2 id="sections-heading">Our Sections</h2>
                <div id = "sections-carousel">
                    <Carousel interval = {null}>
                        <Carousel.Item>
                            <FirstSection/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <SecondSection/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
         );
    }
}
 
export default Sections;