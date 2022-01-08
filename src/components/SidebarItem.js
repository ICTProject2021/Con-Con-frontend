import React from "react";
import { NavLink } from "react-router-dom";
const SidebarItem = ({ menu, index }) => {
  return (
    <li className="NavBar-wrap-nav-wrap-child">
      <NavLink to={menu.path} key={index}>
        <a>
          <span className="NavBar-wrap-nav-wrap-child-link">{menu.name}</span>
        </a>
      </NavLink>
    </li>
  );
};
export default SidebarItem;
