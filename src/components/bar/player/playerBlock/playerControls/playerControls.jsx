import React from "react";
import NextButton from "./controls/nextControl";
import PlayButton from "./controls/playControl";
import PrevButton from "./controls/prevControl";
import RepeatButton from "./controls/repeatControl";
import ShuffleButton from "./controls/shuffleControl";

const PlayerControls = function () {
    return (
        <div className="player__controls">
            <PrevButton/>
            <PlayButton/>
            <NextButton/>
            <RepeatButton/>
            <ShuffleButton/>
        </div>
    )
}

export default PlayerControls;