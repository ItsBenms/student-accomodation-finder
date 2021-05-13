import React from 'react'

// React-Bootstrap Imports
import {
    Nav
} from 'react-bootstrap';

// React Router imports
import {
    //Link
} from 'react-router-dom';

/*
Navigation component
Displays the navigation bar across all pages
 */
export function Navigation() {
    return (
        <Nav className="navBarStyle">
            <Nav.Item> {/* Bootstrap links forming the navigation menu */}
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}