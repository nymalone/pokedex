import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Pokemon from "./pokemon/Pokemon"
import Home from "./pokemon/Home"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
          <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
