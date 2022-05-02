import React from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import logo from "../img/logo.png";
import { Button } from "react-bootstrap";
const Header = () => {
  const logout = () => {
    alert("로그아웃 하시겠습니까?");
    sessionStorage.removeItem("token");
    window.location.replace("/");
  };
  const menus = [
    { name: "홈", path: "/" },
    { name: "Con-Con정보", path: "/Info" },
  ];
  return (
    <div className="PageTemplate-header">
      <div className="NavBar">
        <div className="NavBar-wrap">
          <header className="NavBar-wrap-header">
            <NavLink className="NavBar-wrap-header-logo" to="/">
              <a>
                <img className="NavBar-wrap-header-logo-img" src={logo}></img>
              </a>
            </NavLink>
          </header>
          <nav className="NavBar-wrap-nav">
            <ul className="NavBar-wrap-nav-wrap">
              {menus.map((menu, index) => {
                return <SidebarItem menu={menu} key={index}></SidebarItem>;
              })}
            </ul>
          </nav>
          <Button onClick={logout}>logout</Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
