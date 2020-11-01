import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css_modules/firstSection.scss';




class FirstSection extends Component {
    state = { 
        loading: true,
        sectionObject: null
    }

    async componentDidMount() {
        const url = "https://voda-react-assessment.herokuapp.com/home";
        const response = await fetch(url);
        const jsonObject = await response.json();
        this.setState({ sectionObject: jsonObject, loading: false});
    }

    render() { 
        return ( 
            <div className = "first-section-container">
                <Container id = "first-section-grid">
                    <Row>
                        {/* 1 x Full */}
                        <Col className = "item-long mr-4 col-12 col-lg-3">
                           <img
                            src={this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[0].images[0].img}
                            height = {600+(16*1.5)}
                            alt="Image 1"
                           />
                        </Col>
                        <Col className = "item-square col-12 col-lg-4">
                            <Row>
                                <img
                                src={this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[0].images[1].img}
                                alt="Image 2"
                                />
                            </Row>
                            <Row className = "mt-lg-4 mt-0">
                                <img
                                src={this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[0].images[2].img}
                                alt="Image 3"
                                />
                            </Row>
                        </Col>
                        <Col className = "item-square ml-0 ml-lg-4 col-12 col-lg-4">
                            <Row >
                                <img
                                src={this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[0].images[3].img}
                                alt="Image 4"
                                />
                            </Row>
                            <Row className = "mt-lg-4 mt-0">
                                <img
                                src={this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[0].images[4].img}
                                alt="Image 5"
                                />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default FirstSection;