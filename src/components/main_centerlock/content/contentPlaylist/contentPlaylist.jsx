import React from "react";
import Track from "./playlistItems/track";

const Playlist = function () {
    return(
    <div className="content__playlist">
        <Track/>
        <Track/>
        <Track/>
        <Track/>
    </div>
    )
}

export default Playlist;