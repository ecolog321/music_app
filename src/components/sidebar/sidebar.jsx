import React from "react";
import SidebarBlock from "./block/sidebarBlock";
import SidebarPersonal from "./personal/sidebarPerson";

const Sidebar = function () {
    return (
        <div className="main__sidebar sidebar">
        <SidebarPersonal/>
        <SidebarBlock/>
        </div>
    )
}

export default Sidebar;