import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Chekcout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">{/* <h1>Main page</h1> */}</Route>
        </Switch>
        {/* main page */}
        {/* checkout page */}
        {/* login page */}
        <Home />
      </div>
    </Router>
  );
}

export default App;
