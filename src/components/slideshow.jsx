import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';  
import '../assets/css_modules/slideshow.scss';

class Slideshow extends Component {
    state = {
        loading: true,
        sliderObject: null
    }

    async componentDidMount() {
        const url = "https://voda-react-assessment.herokuapp.com/slider";
        const response = await fetch(url);
        const jsonObject = await response.json();
        this.setState({ sliderObject: jsonObject, loading: false});
    }

    render() { 
        return (
            <div className = "carousel-container"> 
                <Carousel id = "header-carousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[0].image}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>{this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[0].title}</h3>
                        <p>{this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[0].subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[1].image}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>{this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[1].title}</h3>
                        <p>{this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[1].subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[2].image}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>{this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[2].title}</h3>
                        <p>{this.state.loading || !this.state.sliderObject ? "" : this.state.sliderObject[2].subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
         );
    }
}
 
export default Slideshow;