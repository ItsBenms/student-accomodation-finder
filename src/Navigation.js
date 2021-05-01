import React from 'react'

import {
    Nav
} from 'react-bootstrap';

import {
    //Link
} from 'react-router-dom';

export function Navigation() {
    return (
        <Nav className="navBarStyle">
            <Nav.Item>
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