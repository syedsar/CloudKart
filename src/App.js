import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbarr from './Components/Navbar'




function App() {
  return (
    <>
    <Navbarr/>
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/service" component={Service}/>
        <Route exact path= "/about" component={About}/>
        <Route exact path= "/contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App