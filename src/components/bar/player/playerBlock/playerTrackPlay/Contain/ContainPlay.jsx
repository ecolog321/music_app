import React from "react";

const ContainPlay= function () {
    return (
        <div className="player__track-play track-play">
            <div className="track-play__contain">
                <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                        <use xlinkHref=".\images\icon\sprite.svg#icon-note"></use>
                    </svg>
                </div>
                <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">Ты та...</a>
                </div>
                <div className="track-play__album">
                <a className="track-play__album-link" href="http://">Баста</a>
                </div>
            </div>
        </div>
    )
}
export default ContainPlay;