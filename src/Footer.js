import React from 'react'

import {
    Nav
} from 'react-bootstrap';

export function Footer() {

    return (
        <>
            <div className="clear"></div>
            <div>
                <Nav className="footerStyle fixed-bottom">
                    <Nav.Item>
                        <Nav.Link>Copyright - s5209890</Nav.Link>
                    </Nav.Item>
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
            </div>
        </>
    );
}