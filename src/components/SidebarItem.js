import React from "react";
import { Link } from "react-router-dom";
const SidebarItem = ({ menu, index }) => {
  return (
    <li className="NavBar-wrap-nav-wrap-child">
      <Link to={menu.path} key={index}>
        <a className="NavBar-wrap-nav-wrap-child-link">
          <span>{menu.name}</span>
        </a>
      </Link>
    </li>
  );
};
export default SidebarItem;
