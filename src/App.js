import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Details from "./pages/Details";
import Nav from "./components/globals/Nav";
import GlobalStyles from "./components/globals/GlobalStyles";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyles />

      <Switch>
        <Route exact path="/portfolio" render={(props) => <Home />} />
        <Route path="portfolio/work" component={Work} />
        <Route path="portfolio/details/:index" component={Details} />
      </Switch>
    </>
  );
}

export default App;
