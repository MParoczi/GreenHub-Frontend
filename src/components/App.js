import React, { useCallback, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./common/Header/Header";
import PageNotFound from "./common/PageNotFound/PageNotFound";
import { useStyle } from "./appStyle";
import About from "./About/About";
import Footer from "./common/Footer/Footer";
import Registration from "./Registration/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login/Login";
import { logoutUser } from "../redux/actions/logoutActions";

function App() {
  const classes = useStyle();
  const history = useHistory();
  const user = useSelector(state => state.loggedInUser);
  const dispatch = useDispatch();

  const syncLogout = useCallback(
    event => {
      if (event.key === "logout") {
        dispatch(logoutUser(user, history));
      }
    },
    [dispatch, user, history]
  );

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
  }, [window, syncLogout]);

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
