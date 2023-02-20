import React from "react";
import CenterContent from "./content/content";
import Filter from "./filter/filter";
import Title from "./h2/Title";
import Search from "./search/search";

const MainCenter = function () {
    return (
        <div className="main__centerblock">
            <Search/>
            <Title/>
            <Filter/>
            <CenterContent/>
        </div>
    )
}

export default MainCenter;