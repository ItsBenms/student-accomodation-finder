import React from 'react';

import {
    Container
} from 'react-bootstrap';

import {
    Helmet
} from "react-helmet";

export function Privacy() {

    return (
        <Container>
            <div className="privacyStyle">
                <Helmet>
                    <title>BSPF | Privacy</title>
                    <meta name="description" content="BSPF | Privacy information for the Bournemouth Student Property Finder" />
                </Helmet>
                <h2>Privacy Policy</h2>
                <hr></hr>
                <h3 className="PrivacyStyle">Personal Data</h3>
                <p>As part of the Bournemouth student property finder no personal data
                is shared to 3rd parties. The only data that will be retained is data
                submitted through the contact form with relates to the users inputs of
                name, email address and message text. Currently the contact form is
                placeholder and no user data will be sent. The Bournemouth Student Property
                Finder complies with all relevent GDPR regulations.
                </p>
                <h3 className="PrivacyStyle">Images</h3>
                <p>Images are collected from relevant property API's for use on the
                Bournemouth Student Property finder to enable students to view
                what relevant properties look like.
                </p>
                <h3 className="PrivacyStyle">API / Library Usage</h3>
                <p>Several API's and librarys have been used to build the Bournemouth
                student property finder. Including Leaflets mapping library that
                makes use of mapping data provided by OpenStreetMap. A React library
                called Helmet created by the NFL is also being used to track title
                information accross pages and update the page title when switching pages.
                </p>
                <h3 className="PrivacyStyle">Demo Data</h3>
                <p>Property data including descriptions, prices, types, locations
                and pictures has all been gathered manually to make a fully functioning
                prototype for the application using React. In a production enviroment
                this data will be built upon using an existing API to gather relevant
                data for students. The demo data retains full functionality and can be
                filtered by the user depending on the filtering options that
                have been selected by said user.
                </p>
            </div>
        </Container>
    );
}
