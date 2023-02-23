import React from "react";
import SideItem from "./sideItems/SideItem";

const SidebarBlock = function () {
    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
        <SideItem/>
        <SideItem/>
        <SideItem/>
        <SideItem/>
        </div>
        </div>
    )
}

export default SidebarBlock;