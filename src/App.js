import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Details from "./pages/Details";
import Nav from "./components/globals/Nav";
import GlobalStyles from "./components/globals/GlobalStyles";
import { HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route path="/work" component={Work} />
          <Route path="/details/:index" component={Details} />
        </Switch>
        <Nav />
      </HashRouter>
    </>
  );
}

export default App;
