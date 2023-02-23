import React from "react";

const PlayButton = function () {
    return (
        <div className="player__btn-play">
            <svg className="player__btn-play-svg">
                <use xlinkHref=".\images\icon\sprite.svg#icon-play"></use>
            </svg>
        </div>   
    )
}

export default PlayButton;