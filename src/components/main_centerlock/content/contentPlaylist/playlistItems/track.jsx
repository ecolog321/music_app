import React from "react";


const Track = function () {
    return(
<div className="playlist__item">
    <div className="playlist__track track">
        <div className="track__title">
            <div className="track__title-image">
                <svg className="track__title-svg">
                    <use xlinkHref="#"></use>
                </svg>
            </div>
            <div className="track__title-text">
                <a className="track__title-link" href="http://"></a>
                <span className="track__title-text">Nero</span>
            </div>
        </div>
        <div className="track__author">
            <a className="track__author-link" href="http://">Author</a>
        </div>
        <div className="track__album">
            <a className="track__album-link" href="http://">Album</a>
        </div>
        <div className="track__time">
            <svg className="track__time-svg"></svg>
            <span className="track__time-text">4:74</span>
        </div>
    </div>
</div>
    )
}

export default Track;