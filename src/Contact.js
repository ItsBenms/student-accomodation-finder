import React from 'react';

import {
    Container,
    Form,
    Col,
    Button
} from 'react-bootstrap';

import {
    Helmet
} from "react-helmet";


export class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fName: '',
            lName: '',
            tArea: '',
            error: ''
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        alert("Thanks for submitting " + this.state.fName);
    }

    changeHandler = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        let err = ''; // Not used currently

        this.setState({ error: err }) // Not used currently
        this.setState({ [nam]: val })
    }

    render() {
        return (
            <Container>
                <div className="contactStyle">
                    <Helmet>
                        <title>BSPF | Contact</title>
                        <meta name="description" content="BSPF | Contact the Bournemouth Student Property Finder admin" />
                    </Helmet>
                    <h2>Contact</h2>
                    <hr></hr>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="fName" placeholder="Enter your first name" required="required" onChange={this.changeHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lName" placeholder="Enter your last name" required="required" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridQuestion">
                                <Form.Label>Please type your question</Form.Label>
                                <Form.Control as="textarea" rows={3} name="tArea" required="required" onChange={this.changeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        );
    }
}
