import React from 'react';

// React-Bootstrap Imports
import {
    Container
} from 'react-bootstrap';

/*
Header component
Displays header at the top each page
 */
export function Header() {
    return (
        <Container fluid className="containerStyle">
            <div className="text-center">
                <h1 className="headerStyle">Bournemouth Student Property Finder</h1>
            </div>
        </Container>
    );
}
