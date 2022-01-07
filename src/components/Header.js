import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import logo from "../img/logo.png";
const Header = () => {
  const logout = () => {
    alert("로그아웃 하시겠습니까?");
    sessionStorage.removeItem("token");
    window.location.replace("/");
  };
  const menus = [
    { name: "홈", path: "/" },
    { name: "프로필", path: "/Profile" },
    { name: "정보", path: "/" },
  ];
  return (
    <div className="PageTemplate-header">
      <div className="NavBar">
        <div className="NavBar-wrap">
          <header className="NavBar-wrap-header">
            <a className="NavBar-wrap-header-logo">
              <img className="NavBar-wrap-header-logo-img" src={logo}></img>
            </a>
          </header>
          <nav className="NavBar-wrap-nav">
            <ul className="NavBar-wrap-nav-wrap">
              {menus.map((menu, index) => {
                return <SidebarItem menu={menu} key={index}></SidebarItem>;
              })}
            </ul>
          </nav>
          <button onClick={logout}>logout</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
