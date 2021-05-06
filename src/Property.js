import React from 'react';

import PropertiesData from './data/data';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import {
    Image,
    Container,
    Row,
    Col
} from 'react-bootstrap';

import {
    Link
} from 'react-router-dom';

import {
    Helmet
} from "react-helmet";

export function Property(props) {

    let { id } = props.match.params;
    const property = PropertiesData.find((property) => property.id === id);

    if (property) {
        return (
            <div key={property.id} className="singlePropStyle">
                <Helmet>
                    <title>BSPF | {property.Name}</title>
                    <meta name="description" content="BSPF | Individual Property on the Bournemouth Student Property Finder" />
                </Helmet>
                <Container fluid >
                    <Row>
                        <Col sm={12} className="p-0">
                            <Slide>
                                <div className="each-slide">
                                    <div>
                                        <Image src={`.${property.pImage}`} alt={property.AltText} width="100%" className="mb-2 rounded" />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <Image src={`.${property.Slides.Slide1}`} alt={property.AltText} width="100%" className="mb-2 rounded" />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <Image src={`.${property.Slides.Slide2}`} alt={property.AltText} width="100%" className="mb-2 rounded" />
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        <Image src={`.${property.Slides.Slide3}`} alt={property.AltText} width="100%" className="mb-2 rounded" />
                                    </div>
                                </div>
                            </Slide>
                            <div className="singlePropDiv">
                                <h2 className="PropNameStyle"><strong>Property Name : </strong>{property.Name}</h2>
                                <p><strong>Property Type : </strong>{property.Type}</p>
                                <p><strong>Property Price : </strong>{property.Price}</p>
                                <p><strong>Distance : </strong>{property.Distance}</p>
                                <p><strong>Property Description : </strong>{property.Description}</p>
                                <Link to={`/`} className="linkStyle">
                                    <p className="PropNameStyle">Return to the home page</p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div className="singlePropStyle">
                <h1>A property with the id of {id} could not be found</h1>
                <Link to={`/`}>
                    <h3>Return to the home page</h3>
                </Link>
            </div>
        );
    }
}

