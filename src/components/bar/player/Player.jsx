import React from "react";
import PlayerBlock from "./playerBlock/PlayerBlock";
import PlayerVolume from "./playerVolume/playerVolume";

const Player = function (){
    return (
        <div className="bar__player-block">
            <PlayerBlock/>
            <PlayerVolume/>
        </div>
    )
}

export default Player;