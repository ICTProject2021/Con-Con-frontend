import React from "react";
import { Link } from "react-router-dom";
const SidebarItem = ({ menu, index }) => {
  return (
    <li className="NavBar-wrap-nav-wrap-child">
      <a>
        <Link to={menu.path} key={index}>
          <span className="NavBar-wrap-nav-wrap-child-link">{menu.name}</span>
        </Link>
      </a>
    </li>
  );
};
export default SidebarItem;
