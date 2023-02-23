import React from "react";

const RepeatButton = function () {
    return (
        <div className="player__btn-repeat">
            <svg className="player__btn-repeat-svg">
                <use xlinkHref=".\images\icon\sprite.svg#icon-repeat"></use>
            </svg>
        </div>   
    )
}

export default RepeatButton;