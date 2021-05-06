import React from 'react';

// React-Bootstrap Imports
import {
    Container,
    Form,
    Col,
    Button
} from 'react-bootstrap';

// React-Helment Imports
import {
    Helmet
} from "react-helmet";

/*
Contact component
Presents user with a contact form to send any questions
Sets user input in the components state
 */
export class Contact extends React.Component {
    constructor(props) {
        super(props)
        // Set original state
        this.state = {
            fName: '',
            lName: '',
            tArea: '',
            errormessage: ''
        };
    }
    // Prevents page reload / displays alert box with customers first name
    submitHandler = (e) => {
        e.preventDefault();
        alert("Thanks for submitting " + this.state.fName);
    }
    // Sets state using name and value pairings
    changeHandler = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        let err = ''; // Empty variable to store any input errors
        // Checks that first name is not a number
        if (nam === 'fName') {
            if (val !== '' && Number(val)) {
                err = <strong>First Name must not be a number</strong>
            }
        }
        // Checks that last name is not a number
        if (nam === 'lName') {
            if (val !== '' && Number(val)) {
                err = <strong>Last Name must not be a number</strong>
            }
        }
        // Sets any errors into state
        this.setState({ errormessage: err })
        // Sets users input into state
        this.setState({ [nam]: val })
    }
    render() {
        return (
            <Container>
                <div className="contactStyle">
                    {/* React Helment to modify page header and meta tags */}
                    <Helmet>
                        <title>BSPF | Contact</title>
                        <meta name="description" content="BSPF | Contact the Bournemouth Student Property Finder admin" />
                    </Helmet>
                    <h2>Contact</h2>
                    <hr></hr>
                    <Form onSubmit={this.submitHandler}> {/* submitHandler gets called when user submits data */}
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFName">
                                <Form.Label>First Name</Form.Label>
                                {/* changeHandler sets state based on user input */}
                                <Form.Control type="text" name="fName" placeholder="Enter your first name" required="required" onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLName">
                                <Form.Label>Last Name</Form.Label>
                                {/* changeHandler sets state based on user input */}
                                <Form.Control type="text" name="lName" placeholder="Enter your last name" required="required" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridQuestion">
                                <Form.Label>Please type your question</Form.Label>
                                {/* changeHandler sets state based on user input */}
                                <Form.Control as="textarea" rows={3} name="tArea" required="required" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {/* Output any errors */}
                    {this.state.errormessage}
                </div>
            </Container>
        );
    }
}
