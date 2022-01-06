import React from "react";
import {
  Router,
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
const AppRouter = ({ islog }) => {
  console.log(islog);
  return (
    <BrowserRouter>
      <Switch>
        {islog ? (
          <>
            <Route exct path="/">
              <Home />
            </Route>
            <Route exct path="/profile">
              <Profile />
            </Route>
            <Redirect from="*" to="/"></Redirect>
          </>
        ) : (
          <>
            <Route exct path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/"></Redirect>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};
export default AppRouter;
