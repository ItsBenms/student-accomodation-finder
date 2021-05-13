import React from 'react';

// Local JSON data import
import PropertiesData from './data/data';

// React-Slideshow-Image imports
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// React-Bootstrap Imports
import {
    Image,
    Container,
    Row,
    Col
} from 'react-bootstrap';

// React Router imports
import {
    Link
} from 'react-router-dom';

// React-Helment Imports
import {
    Helmet
} from "react-helmet";

/*
Property component
Returns data about a single property from local JSON file
 */
export function Property(props) {

    let { id } = props.match.params; // Destructure id from the props
    const property = PropertiesData.find((property) => property.id === id); // Finds property via id and stores in property variable

    if (property) { // Checks if a propertry with the give ID is true
        return (
            <div key={property.id} className="singlePropStyle">
                {/* React Helment to modify page header and meta tags */}
                <Helmet>
                    <title>BSPF | {property.Name}</title>
                    <meta name="description" content="BSPF | Individual Property on the Bournemouth Student Property Finder" />
                </Helmet>
                <Container fluid >
                    <Row>
                        <Col sm={12} className="p-0">
                            {/* React-Slideshow-Image library
                                Takes in images from local json file and creates a slideshow feature
                            */}
                            <Slide>
                                <div className="each-slide">
                                    <div>
                                        {/* Slide show image */}
                                        <Image src={`.${property.pImage}`} alt={property.AltText} width="100%" className="mb-2 rounded" /> {/* Alt text via local JSON */}
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        {/* Slide show image */}
                                        <Image src={`.${property.Slides.Slide1}`} alt={property.AltText} width="100%" className="mb-2 rounded" /> {/* Alt text via local JSON */}
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        {/* Slide show image */}
                                        <Image src={`.${property.Slides.Slide2}`} alt={property.AltText} width="100%" className="mb-2 rounded" /> {/* Alt text via local JSON */}
                                    </div>
                                </div>
                                <div className="each-slide">
                                    <div>
                                        {/* Slide show image */}
                                        <Image src={`.${property.Slides.Slide3}`} alt={property.AltText} width="100%" className="mb-2 rounded" /> {/* Alt text via local JSON */}
                                    </div>
                                </div>
                            </Slide>
                            <div className="singlePropDiv">
                                {/* Access each value to output */}
                                <h2 className="PropNameStyle"><strong>Property Name : </strong>{property.Name}</h2>
                                <p><strong>Property Type : </strong>{property.Type}</p>
                                <p><strong>Property Price : </strong>{property.Price}</p>
                                <p><strong>Distance : </strong>{property.Distance}</p>
                                <p><strong>Property Description : </strong>{property.Description}</p>
                                {/* Link to return to home */}
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
            // Returns if an invalid id is selected
            <div className="singlePropStyle">
                {/* Displays which id is invalid */}
                <h1>A property with the id of {id} could not be found</h1>
                {/* Offers link to return to home */}
                <Link to={`/`}>
                    <h3>Return to the home page</h3>
                </Link>
            </div>
        );
    }
}

