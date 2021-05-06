import React from 'react';

// Component Imports
import { Filtering } from './Filtering';
import { Properties } from './Properties';

// React-Bootstrap Imports
import {
    Container
} from 'react-bootstrap';

// React-Helment Imports
import {
    Helmet
} from "react-helmet";

/*
Header component
Parent component for its two children of Filtering and Properties
 */
export function Home() {
    return (
        <div>
            {/* React Helment to modify page header and meta tags */}
            <Helmet>
                <title>BSPF | Home</title>
                <meta name="description" content="BSPF | Home page for the Bournemouth Student Property Finder" />
            </Helmet>
            <Container fluid className="homeContainerStyle px-0">
                {/* Displays Filtering component within the Home Component */}
                <Filtering />
                <div className="homeStyle">
                    {/* Displays Properties component within the Home Component */}
                    <Properties />
                </div>
            </Container>
        </div>
    );
}
