import React from "react";
import ContainPlay from "./Contain/ContainPlay";
import LikeDis from "./LikeDis/LikeDis";

const PlayerTrackPlay = function () {
    return (
        <div className="player__track-play track-play">
            <ContainPlay/>
            <LikeDis/>
        </div>
    )
}

export default PlayerTrackPlay;