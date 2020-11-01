import React, { Component } from 'react';
import { Button, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap';

import '../assets/css_modules/secondSection.scss';

class SecondSection extends Component {
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
            <div className = "second-section-container">
                <Container id = "second-section-grid">
                    <Row>
                        <Col className = "services-container mr-lg-4 mr-0 col-lg-6 col-12 p-4">
                            <h4>{this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[1].title}</h4>
                            <br/>
                            <h2>{this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[1].graphText}</h2>
                            
                            <div className = "percentages-container">
                                <div className = "percentages-block">
                                    <div className = "d-inline">
                                        <h6 className = "float-left">{this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[1].stats[0].title}</h6>
                                        <h6 className = "float-right">{this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[0].amount)/10 + "%"}</h6>
                                    </div>
                                    <div className = "percentage-bar">
                                        <ProgressBar id="pb-one" now={this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[0].amount)/10}/>
                                    </div>
                                </div>
                                <div className = "percentages-block">
                                    <div className = "d-inline">
                                        <h6 className = "float-left">{this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[1].stats[1].title}</h6>
                                        <h6 className = "float-right">{this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[1].amount)/10 + "%"}</h6>
                                    </div>
                                    <div className = "percentage-bar">
                                        <ProgressBar id="pb-two" now={this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[1].amount)/10}/>
                                    </div>
                                </div>
                                <div className = "percentages-block">
                                    <div className = "d-inline">
                                        <h6 className = "float-left">{this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[1].stats[2].title}</h6>
                                        <h6 className = "float-right">{this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[2].amount)/10 + "%"}</h6>
                                    </div>
                                    <div className = "percentage-bar">
                                        <ProgressBar id="pb-three" now={this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[2].amount)/10}/>
                                    </div>
                                </div>
                                <div className = "percentages-block">
                                    <div className = "d-inline">
                                        <h6 className = "float-left">{this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[1].stats[3].title}</h6>
                                        <h6 className = "float-right">{this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[3].amount)/10 + "%"}</h6>
                                    </div>
                                    <div className = "percentage-bar">
                                        <ProgressBar id="pb-four" now={this.state.loading || !this.state.sectionObject ? "" : (this.state.sectionObject[0].sections[1].stats[3].amount)/10}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className = "info-container ml-lg-4 ml-0 col-lg-4 col-12 p-4">
                            <h2>{this.state.loading || !this.state.sectionObject ? "" : this.state.sectionObject[0].sections[1].formText}</h2>
                            <p>We work with ecosystem leaders, corporations and startups worldwide. How can we help you?</p>

                            <Form id = "form-container">
                                <Form.Group controlId="formGroupPhone">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="tel" placeholder="Your Phone" pattern="(\+[1-9][0-9])?[26]{1}[0-9]{9}" title="10 digit number beginning with 2 or 6" required/>
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <Form.Control type="email" placeholder="Your Email" required/>
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    <Form.Control type="password" placeholder="Password" pattern="([a-z]+[A-Z]+[0-9]+[!@#$%^&*]+)[a-zA-Z0-9!@#$^&*]{4,}" required/>
                                </Form.Group>
                                <div className = "text-center">
                                    <Button id="submit-button" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default SecondSection;