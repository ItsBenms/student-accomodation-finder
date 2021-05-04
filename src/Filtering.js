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
        return (
            <>
                <Form inline className="filteringStyle" onSubmit={this.selectHandler}>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="LocationfilterDropDown"
                        custom
                        name="location"
                        label="Location"
                        onChange={this.selectHandler}
                    >
                        <option label="Location" value="Location">Location</option>
                        <option value="Bournemouth">Bournemouth</option>
                        <option value="Boscombe">Boscombe</option>
                        <option value="Poole">Poole</option>
                    </Form.Control>

                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="TypefilterDropDown"
                        custom
                        name="type"
                        label="Type"
                        onChange={this.selectHandler}
                    >
                        <option label="Type" value="Type">Type</option>
                        <option value="Managed Accomodation">Managed Accomodation</option>
                        <option value="Private Rented">Private Rented</option>
                        <option value="Shared House">Shared House</option>
                    </Form.Control>

                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="PriocefilterDropDown"
                        custom
                        name="price"
                        label="Price"
                        onChange={this.selectHandler}
                    >
                        <option label="Price" value="Price">Price</option>
                        <option value="£100 - £125wk">£100 - £125wk</option>
                        <option value="£126 - £150wk">£126 - £150wk</option>
                        <option value="£151 - £200wk">£151 - £200wk</option>
                    </Form.Control>

                </Form>
                <div className="homeStyle">
                    <Properties filterLocation={this.state.location} filterType={this.state.type} filterPrice={this.state.price} filterDistance={this.state.distance} />
                </div>
            </>
        );
    }
}