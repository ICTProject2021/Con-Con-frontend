import React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile"
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exct path="/home">
          <Home />
        </Route>
        <Route exct path="/profile">
          <Profile />
        </Route>
        <Route exct path="/">
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default AppRouter;
