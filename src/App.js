import React from 'react'

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'


function App() {
  return (
    <div>
        <Router>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
