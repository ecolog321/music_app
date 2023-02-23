import React from "react";

const ShuffleButton = function () {
    return (
        <div className="player__btn-shuffle">
            <svg className="player__btn-shuffle-svg">
                <use xlinkHref=".\images\icon\sprite.svg#icon-shuffle"></use>
            </svg>
        </div>   
    )
}

export default ShuffleButton;