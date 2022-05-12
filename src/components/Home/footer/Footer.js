import React, { useEffect, useState } from "react";
import Logo from "../../../assets/login_logo.svg";
const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <div className="PageTemplate-footer">
      <div className="Footer" style={{ color: "white" }}>
        <img src={Logo} style={{ width: "150px", height: "150px" }} />
      </div>
    </div>
  );
};
export default Footer;
