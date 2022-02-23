import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoute from "./middlewares/authRoute";
import Authenticated from "./middlewares/authenticated";
import AppContainer from "../pages/appContainer/AppContainer";
import Login from "../pages/login/Login";

const Routes = () => {
  return (
    <Switch>
      <AuthRoute exact path="/home" component={AppContainer} />
      <Authenticated path="/login" component={Login} />
      <Route>
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default Routes;
