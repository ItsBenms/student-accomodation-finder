import React from 'react'

// React-Bootstrap Imports
import {
    Nav
} from 'react-bootstrap';

/*
Footer component
Displays footer at the bottom each page
 */
export function Footer() {
    return (
        <>
            <div className="clear"></div> {/* Ensures no content over-runs footer */}
            <div>
                <Nav className="footerStyle fixed-bottom"> {/* Fixed Bottom class ensures footer doesn't move */}
                    {/* Nav links to other components utilising React-Router */}
                    <Nav.Item> {/* Bootstrap Links forming the footer */}
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