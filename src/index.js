import React from 'react';
import ReactDOM from 'react-dom';

// Component imports
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Privacy } from './Privacy';
import { Property } from './Property';

// CSS imports
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

/*
Root component
Displays the components needed across all routes
Uses React Router to provide links between components
 */
function App() {
  return (
    <Router> {/* Initialise React-Router */}
      <Header />
      <Navigation />
      <Switch>
        {/* Individual routes */}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/privacy" exact component={Privacy} />
        {/* Route taking in id to return a specific route based on property id */}
        <Route path="/property/:id" component={Property} />
      </Switch>
      <Footer />
    </Router>
  )
}

// Renders the application via the root div
ReactDOM.render(
  <App />,
  document.getElementById('root'));
