import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header/Header";
import PageNotFound from "./common/PageNotFound/PageNotFound";
import { useStyle } from "./appStyle";
import About from "./About/About";
import Footer from "./common/Footer/Footer";
import Registration from "./Registration/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login/Login";

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
      <ToastContainer autoClose={6000} hideProgressBar />
    </div>
  );
}

export default App;
