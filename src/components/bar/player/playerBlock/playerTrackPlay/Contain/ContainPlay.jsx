import React from "react";

const ContainPlay= function () {
    return (
        <div className="player__track-play track-play">
            <div className="track-play__contain track-play">
                <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                        <use xlinkHref="#"></use>
                    </svg>
                </div>
                <div className="track-play__author">
                    <a className="track-play__author-link" href="http://"></a>
                </div>
                <div className="track-play__album">
                <a className="track-play__album-link" href="http://"></a>
                </div>
            </div>
        </div>
    )
}
export default ContainPlay;