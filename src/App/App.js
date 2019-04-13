import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../About/About';
import Destinations from '../Destinations/Destinations';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/pricing" exact component={Pricing} />
      </Router>
    );
  }
}

export default App;
