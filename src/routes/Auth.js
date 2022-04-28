import React from "react";
import AuthForm from "../components/AuthForm";
import Logo from "../img/login_logo.svg";
const Auth = () => {
  return (
    <div className="wrap">
      <div className="main-wrap">
        <div className="side left-section">
          <img src={Logo}></img>
        </div>
        <div className="side right-section">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
export default Auth;
