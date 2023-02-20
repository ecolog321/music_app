import React from "react";
import PlayerControls from "./playerControls/playerControls";
import PlayerTrackPlay from "./playerTrackPlay/playerTrackPlay";

const PlayerBlock = function () {
    return (
        <div className="bar__player player">
            <PlayerControls/>
            <PlayerTrackPlay/>
        </div>
    )
}

export default PlayerBlock;