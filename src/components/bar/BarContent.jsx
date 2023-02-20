import React from "react";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import Player from "./player/Player";

const Bar = function () {
    return(
    <div className="bar">
        <div className="bar__content">
            <ProgressBar/>
            <Player/>
        </div>
    </div>
    )
}

export default Bar;