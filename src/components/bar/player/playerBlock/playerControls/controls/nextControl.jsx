import React from "react";

const NextButton = function () {
    return (
        <div className="player__btn-next">
            <svg className="player__btn-next-svg">
                <use xlinkHref=".\images\icon\sprite.svg#icon-next"></use>
            </svg>
        </div>   
    )
}

export default NextButton;