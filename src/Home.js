import React from 'react';

import { Filtering } from './Filtering';
import { Properties } from './Properties';

import {
    Container
} from 'react-bootstrap';

import {
    Helmet
} from "react-helmet";

export function Home() {
    return (
        <div>
            <Helmet>
                <title>BSPF | Home</title>
                <meta name="description" content="BSPF | Home page for the Bournemouth Student Property Finder" />
            </Helmet>
            <Container fluid className="homeContainerStyle px-0">
                <Filtering />
                <div className="homeStyle">
                    <Properties />
                </div>
            </Container>
        </div>
    );
}
