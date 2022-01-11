import React from "react";
import { NavLink } from "react-router-dom";
const SidebarItem = ({ menu, index }) => {
  return (
    <li className="NavBar-wrap-nav-wrap-child">
      <NavLink className="linkmenu" to={menu.path} key={index}>
        <span className="NavBar-wrap-nav-wrap-child-link">{menu.name}</span>
      </NavLink>
    </li>
  );
};
export default SidebarItem;
