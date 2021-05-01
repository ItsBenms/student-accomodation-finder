import React from 'react';

import {
    Container
} from 'react-bootstrap';

export function Header() {

    return (
        <Container fluid className="containerStyle">
            <div className="text-center">
                <h1 className="headerStyle">Bournemouth Student Property Finder</h1>
            </div>
        </Container>
    );
}
