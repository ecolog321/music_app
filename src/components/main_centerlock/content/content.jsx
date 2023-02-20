import React from "react";
import Playlist from "./contentPlaylist/contentPlaylist";
import ContentTitle from "./contentTitle/contentTitle";

const CenterContent = function () {
    return (
<div className="centerblock__content">
    <ContentTitle/>
    <Playlist/>
</div>
    )
}

export default CenterContent;