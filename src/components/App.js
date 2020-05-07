import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header/Header";
import PageNotFound from "./common/PageNotFound/PageNotFound";
import { useStyle } from "./appStyle";
import About from "./About/About";
import Footer from "./common/Footer/Footer";

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
