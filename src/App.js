import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Details from "./pages/Details";
import Nav from "./components/globals/Nav";
import Cursor from "./components/globals/Cursor";
import About from "./pages/About";
import GlobalStyles from "./components/globals/GlobalStyles";
import { HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/details/:index" component={Details} />
        </Switch>
        <Nav />
        <Cursor />
      </HashRouter>
    </>
  );
}

export default App;
