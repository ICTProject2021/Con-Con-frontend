import React from "react";
import { Link } from "react-router-dom";
const SidebarItem = ({menu,index}) =>{
    return(
        <div className="sidebar-item">
            <ul>
                <li><Link to={menu.path} key={index}><a><span>{menu.name}</span></a></Link></li>
            </ul>
        </div>
    )
}
export default SidebarItem;