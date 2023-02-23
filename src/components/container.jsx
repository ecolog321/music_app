import React from "react";
import Bar from "./bar/BarContent";
import MainCenter from "./main_centerlock/mainContent";
import Nav from "./main_nav/Nav";
import Sidebar from "./sidebar/sidebar";

const Container = function () {
    return(
    <div className="container">
        <div className="main">
            <Nav/>
            <MainCenter/>
            <Sidebar/>
        </div>
        <div className="bar">
            <Bar/>
        </div>
        <footer className="footer"></footer>
    </div>
    )
}

export default Container;