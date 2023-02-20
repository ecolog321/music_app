import React from "react";
import Bar from "./components/bar/BarContent";
import MainCenter from "./components/main_centerlock/mainContent";
import Nav from "./components/main_nav/Nav";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainCenter/>
      <Sidebar/>
      <Bar/>
    </div>
  );
}

export default App;
