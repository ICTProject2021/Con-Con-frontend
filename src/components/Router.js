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
import Info from "../routes/Info";
const AppRouter = ({ islog }) => {
  return (
    <BrowserRouter>
      <Switch>
        {islog ? (
          <>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route exct path="/">
              <Auth />
            </Route>
            {/* <Redirect from="*" to="/"></Redirect> */}
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};
export default AppRouter;
