import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
const Header = () =>{
    const menus = [ 
        {name:"홈",path:"/Home"},
        {name:"프로필",path:"/Profile"},
        {name:"정보",path:"/Home"},
    ]
    return(
        <div className="Home-header">
            <div className="sidebar">
                <div className="Navbar">
                    <a>logo</a>
                    {menus.map((menu,index) =>{
                        return(<SidebarItem menu={menu} index={index}></SidebarItem>)
                    })}
                </div>
            </div>
        </div>
    )
}
export default Header;