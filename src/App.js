import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <CssBaseline />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
