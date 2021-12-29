import React from "react";
import "../Sidebar.css"
const SidebarItem = ({menu}) =>{
    return(
        <div className="sidebar-item">
            <p>{menu.name}</p>
        </div>
    )
}
export default SidebarItem;