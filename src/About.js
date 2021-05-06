import React from 'react';

import {
    Container,
    Image
} from 'react-bootstrap';

import {
    Helmet
} from "react-helmet";

import usermap from './img/about/usermap.png';
import crazy8s from './img/about/crazy8s.png';
import solutionSketch from './img/about/solution_sketch.png';

export function About() {
    return (
        <Container>
            <div className="aboutStyle">
                <Helmet>
                    <title>BSPF | About</title>
                    <meta name="description" content="BSPF | What is the Bournemouth Student Property Finder" />
                </Helmet>
                <h2>About</h2>
                <hr></hr>
                <p>The Bournemouth Student Property Finder is a web application
                that has been designed and created through the use of a user centered approach
                as part of a Usercentered design unit at Bournemouth University.
                The application is primarily aimed at students in the Bournemouth area,
                providing them with an easy and accessible way to search for properties suitable for students.
                The website has been designed in a way for students to search for properties utilising a variety
                of filtering options to refine their searches such as location, accomodation type, price and distance
                from the university.
                </p>
                <hr></hr>
                <p>Below are some examples of the stages of design that I carried out through the design sprint
                process.
                </p>
                <h3 className="AboutStyle my-3">User Journey Map</h3>
                <Image src={usermap} rounded width="90%" alt="User Journey Map for the Student Property Finder" />
                <h3 className="AboutStyle my-3">Crazy 8s</h3>
                <Image src={crazy8s} rounded width="90%" alt="Crazy 8s design sketches for the Student Property Finder" />
                <h3 className="AboutStyle my-3">Solution Sketch</h3>
                <Image src={solutionSketch} rounded width="90%" height="80%" alt="Solution sketch for the Student Property Finder" />
            </div>
        </Container>
    );
}

