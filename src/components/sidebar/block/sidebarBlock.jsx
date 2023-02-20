import React from "react";
import SideItem from "./sideItems/SideItem";

const SidebarBlock = function () {
    return (
        <div className="sidebar__block">
        <SideItem/>
        <SideItem/>
        <SideItem/>
        <SideItem/>
        </div>
    )
}

export default SidebarBlock;