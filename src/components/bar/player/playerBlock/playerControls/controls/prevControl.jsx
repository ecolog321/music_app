import React from "react";

const PrevButton = function () {
    return (
        <div className="player__btn-prev">
            <svg className="player__btn-prev-svg">
                <use xlinkHref=".\images\icon\sprite.svg#icon-prev"></use>
            </svg>
        </div>   
    )
}

export default PrevButton;