import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "../Sidebar.css"
const Sidebar = () =>{
    const menus = [ 
        {name:"홈",path:"/Home"},
        {name:"프로필",path:"/Profile"},
        {name:"정보",path:"/Home"}
    ]
    return(
        <div className="sidebar">
            <>logo</>
            {menus.map((menu,index) =>{
                return(<Link to={menu.path} key={index}><SidebarItem menu={menu}></SidebarItem></Link>)
            })}
        </div>
    )
}
export default Sidebar;