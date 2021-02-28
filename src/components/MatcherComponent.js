import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Fade } from 'react-animation-components';




class Matcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numTattoos: '0',
            painThreshold: '2',
            overFifty: '0',
            isCoverUp: '0',
            isExtension: '0',
            isClearIdea: '1',
            isOpenToArtist: '1',
            isColor: '1',
            sizeTattoo: '',
            locationTattoo: '',
            themeTattoo: '',
            styleTattoo: '',
            dateAppointment: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'check' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {
 
        return(
            <div className="container">
                <div className="row row-noseparator align-items-center">
                    <div className="col">
                        <h3>Get matched to an artist</h3>
                        <p className="text-light">Complete the questionnaire below, and we'll match you to an artist who'll deliver an exceptional tattoo!</p>
                    </div>
                </div>


                <Fade in>
                <div className="row row-content">
                    <div className="container-fluid">
                        <Form className="p-sm-5" onSubmit={this.handleSubmit} >
                            {/* Number of Tattoos radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">How many tattoos do you currently have?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="0" 
                                            checked={this.state.numTattoos === "0" }
                                            onChange={this.handleInputChange}
                                        />
                                        None
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="1"
                                            checked={this.state.numTattoos === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        1-2
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="3"
                                            checked={this.state.numTattoos === "3"}
                                            onChange={this.handleInputChange}
                                        />
                                        3-4
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="5"
                                             checked={this.state.numTattoos === "5"}
                                            onChange={this.handleInputChange}
                                        />
                                        5-9
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="numTattoos" value="10"
                                            checked={this.state.numTattoos === "10"}
                                            onChange={this.handleInputChange}
                                        />
                                        10+
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                                
                            {/* Pain Threshold radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">What is your pain threshold?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="0"
                                            checked={this.state.painThreshold === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        Very Low
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="1"
                                            checked={this.state.painThreshold === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Low
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="2" 
                                            checked={this.state.painThreshold === "2"}
                                            onChange={this.handleInputChange}
                                        />
                                        Moderate
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="3"
                                            checked={this.state.painThreshold === "3"}
                                            onChange={this.handleInputChange}
                                        />
                                        High
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="painThreshold" value="4" 
                                        checked={this.state.painThreshold === "4"}
                                        onChange={this.handleInputChange}
                                    />
                                    Very High
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/*  Age radio button selection group  */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Are you over age 50?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="overFifty"  value="1"
                                            checked={this.state.overFifty === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="overFifty" value="0" 
                                            checked={this.state.overFifty === "0"}
                                            onChange={this.handleInputChange}
                                        /> 
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            {/*  Cover up radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Is your new tattoo a cover up?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isCoverUp" value="1"
                                            checked={this.state.isCoverUp === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isCoverUp" value="0"  
                                            checked={this.state.isCoverUp === "0"}
                                            onChange={this.handleInputChange}
                                        /> 
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/*  Cover up radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Is your new tattoo an extension of an existing tattoo?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isExtension" value="1"
                                            checked={this.state.isExtension === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isExtension" value="0"  
                                            checked={this.state.isExtension === "0"}
                                            onChange={this.handleInputChange}
                                        /> 
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            {/*  Clear Idea radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">I have a very clear idea of what I want</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isClearIdea" value="1"  
                                            checked={this.state.isClearIdea === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isClearIdea" value="0" 
                                            checked={this.state.isClearIdea === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            {/*   Open to artist radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">I'm open to an artist's interpretation</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isOpenToArtist" value="1"  
                                            checked={this.state.isOpenToArtist === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Yes
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isOpenToArtist" value="0" 
                                            checked={this.state.isOpenToArtist === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/*   Color or black & gray radio button selection group */}
                            <FormGroup row tag="fieldset">
                                <Label className="col-sm-5">Will your new tattoo be in color or black {'&'} gray?</Label>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isColor" value="1"  
                                            checked={this.state.isColor === "1"}
                                            onChange={this.handleInputChange}
                                        />
                                        Color
                                    </Label>
                                </FormGroup>

                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" name="isColor" value="0" 
                                            checked={this.state.isColor === "0"}
                                            onChange={this.handleInputChange}
                                        />
                                        Black {'&'} Gray
                                    </Label>
                                </FormGroup>
                            </FormGroup>


                            {/* Select the size of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="sizeTattoo" className="col-sm-5">What size will your new tattoo be?</Label>
                                <div className="col">
                                    <Input required type="select" id="sizeTattoo" name="sizeTattoo"
                                        value={this.state.sizeTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">Extra small (single image less than 1" x 1")</option>
                                        <option value="2">Small (single image less than 2" x 2")</option>
                                        <option value="3">Medium (single image less than 6" x 6")</option>
                                        <option value="4">Large (full sleeve or long placement)</option>
                                        <option value="5">Extra Large (full back, chest or leg)</option>
                                    </Input>
                                </div>
                            </FormGroup>

                            
                            {/* Select the location of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="locationTattoo" className="col-sm-5">Where will your new tattoo be located?</Label>
                                <div className="col">
                                    <Input required type="select" id="locationTattoo" name="locationTattoo"
                                        value={this.state.locationTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="wrist">Wrist</option>
                                        <option value="forearm">Forearm</option>
                                        <option value="bicep">Bicep</option>
                                        <option value="hand">Hand</option>
                                        <option value="calf">Calf</option>
                                        <option value="thigh">Thigh</option>
                                        <option value="ankle">Ankle</option>
                                        <option value="neck">Neck</option>
                                        <option value="shoulder">Shoulder</option>
                                        <option value="torso">Torso</option>
                                        <option value="ribs">Ribs</option>
                                        <option value="back">Back</option>
                                        <option value="head">Head</option>
                                        <option value="face">Face</option>
                                        <option value="other">Other</option>
                                    </Input>
                                </div>
                            </FormGroup>

                            {/* Select the theme of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="themeTattoo" className="col-sm-5">What is the theme of your new tattoo?</Label>
                                <div className="col">
                                    <Input required type="select" id="themeTattoo" name="themeTattoo"
                                        value={this.state.themeTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="words">Written words</option>
                                        <option value="landscape">Landscapes</option>
                                        <option value="pet">Pets</option>
                                        <option value="wildlife">Wildlife</option>
                                        <option value="portrait">Portrait</option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="horror">Horror</option>
                                        <option value="gothic">Gothic</option>
                                        <option value="nautical">Nautical</option>
                                        <option value="pinup">Pin-up</option>
                                        <option value="military">Military</option>
                                        <option value="automotive">Automotive/Motorcycle</option>
                                        <option value="music">Musical</option>
                                        <option value="history">History</option>
                                        <option value="other">Other</option>
                                    </Input>
                                </div>
                            </FormGroup>


                            {/* Select the style of the tattoo in form */}
                            <FormGroup row>
                                <Label htmlFor="styleTattoo" className="col-sm-5">What style will your new tattoo be done in?</Label>
                                <div className="col">
                                    <Input required type="select" id="styleTattoo" name="styleTattoo"
                                        value={this.state.styleTattoo}
                                        onChange={this.handleInputChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="americantraditional">American Traditional</option>
                                        <option value="neotraditional">Neo Traditional</option>
                                        <option value="newschool">New School</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="realism">Photo Realism</option>
                                        <option value="tribal">Tribal/Blackwork</option>
                                        <option value="biomechanical">Biomechanical</option>
                                        <option value="geometric">Geometric</option>
                                        <option value="trashpolka">Trash Polka</option>
                                        <option value="surrealism">Surrealism</option>
                                        <option value="watercolor">Watercolor</option>
                                        <option value="other">Other</option>
                                    </Input>
                                </div>
                            </FormGroup>

                            {/* Select a desired appointment date in the modal reservation form  */}
                            <FormGroup row>
                                <Label required htmlFor="dateAppointment" className="col-sm-5">Desired appointment date</Label>
                                <div className="col">
                                    <Input required type="date" id="dateAppointment" name="dateAppointment"
                                        value={this.state.dateAppointment}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </FormGroup>


                            <FormGroup row>
                                <Col>
                                    <Button type="submit" color="danger">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
}

export default Matcher;