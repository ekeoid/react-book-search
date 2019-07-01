import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Jumbotron from './components/Jumbotron';

import Search from "./pages/Search";
import Saved from "./pages/Saved";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h4>Search for and Save Books of Interest</h4>
          </Jumbotron>

          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
