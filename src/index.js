import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Privacy } from './Privacy';
import { Property } from './Property';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/property/:id" component={Property} />
      </Switch>
      <Footer />
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
