import React from 'react';
import Home from './routeComponents/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./routeComponents/About";
import Projects from "./routeComponents/Projects";

export const App = () => (
  <div> 
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
      </Switch>
    </Router>  
  </div>
);
