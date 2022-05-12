import React from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarItem from "../../SidebarItem";
// import logo from "../img/logo.png";
import HeaderLogo from "../../../assets/headerlogo.svg";
import { Button } from "react-bootstrap";
import * as S from "./index.style";
const Header = () => {
  const menus = [
    { name: "홈", path: "/home" },
    { name: "프로필", path: "/profile" },
    { name: "정보", path: "/Info" },
  ];
  return (
    <S.Nav>
      <S.HeaderLogo>
        <S.HeaderLogoImg src={HeaderLogo} />
      </S.HeaderLogo>
      {menus.map((menu, index) => {
        return (
          <S.NavbarItem menu={menu} key={index}>
            <Link
              to={menu.path}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {menu.name}
            </Link>
          </S.NavbarItem>
        );
      })}
    </S.Nav>
  );
};
export default Header;
