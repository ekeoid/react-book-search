import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Search from "./pages/Search";
import Saved from "./pages/Saved";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
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
