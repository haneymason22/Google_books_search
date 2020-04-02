import React from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";

import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/noMatch";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/noMatch" component={NoMatch} />
        </Wrapper>
          
      </div>
    </Router>
  );
}

export default App;
