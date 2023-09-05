import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../components/Home/Home';
import Providers from '../components/Providers/Providers';
import Resources from '../components/Resources/Resources';
import ServiceAreas from '../components/ServiceAreas/ServiceAreas'
import Utilities from '../components/utilities/Utilities';
import AboutUs from '../components/AboutUs/AboutUs'

class Routes extends Component {
  render() {
    return (

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/serviceAreas">
            <ServiceAreas />
          </Route>
          <Route path="/providers">
            <Providers />
          </Route>
          <Route path="/utilities">
            <Utilities />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>

        </Switch>
    );
  }
}

export default Routes;
