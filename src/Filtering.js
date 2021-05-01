import React from 'react';

import {
    Form,
    //Button
} from 'react-bootstrap';

import { Properties } from './Properties';

export class Filtering extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: 'Boscombe',
            type: 'Shared House',
            price: '£126 - £150wk',
            distance: 'Less than 5 miles to uni'
        };
    }

    selectHandler = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val })
    }

    render() {

        // console.log(this.state.location)
        // console.log(this.state.type)
        // console.log(this.state.price)
        // console.log(this.state.distance)

        return (
            <>
                <Form inline className="filteringStyle" onSubmit={this.selectHandler}>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                        name="location"
                        onChange={this.selectHandler}
                    >
                        <option value="Location">Location</option>
                        <option value="Bournemouth">Bournemouth</option>
                        <option value="Boscombe">Boscombe</option>
                        <option value="Poole">Poole</option>
                    </Form.Control>

                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                        name="type"
                        onChange={this.selectHandler}
                    >
                        <option value="Type">Type</option>
                        <option value="Managed Accomodation">Managed Accomodation</option>
                        <option value="Private Rented">Private Rented</option>
                        <option value="Shared House">Shared House</option>
                    </Form.Control>

                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                        name="price"
                        onChange={this.selectHandler}
                    >
                        <option value="Price">Price</option>
                        <option value="£100 - £125wk">£100 - £125wk</option>
                        <option value="£126 - £150wk">£126 - £150wk</option>
                        <option value="£151 - £200wk">£151 - £200wk</option>
                    </Form.Control>

                    {/* <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                        name="distance"
                        onChange={this.selectHandler}
                    >
                        <option value="Distance">Distance</option>
                        <option value="Less than 2.5 miles to uni">Less than 2.5 miles to uni</option>
                        <option value="Less than 5 miles to uni">Less than 5 miles to uni</option>
                        <option value="Less than 10 miles to uni">Less than 10 miles to uni</option>
                    </Form.Control> */}

                </Form>
                <div className="homeStyle">
                    <Properties filterLocation={this.state.location} filterType={this.state.type} filterPrice={this.state.price} filterDistance={this.state.distance} />
                </div>
            </>
        );
    }
}