import React from "react";

const LikeDis = function () {
    return (
    <div className="track-play__like-dis _btn-icon">
        <div className="track-play__like">
            <svg className="track-play__like-svg">
                <use xlinkHref="#"></use>
            </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg">
                <use xlinkHref="#"></use>
            </svg>
        </div>
    </div>
    )
}

export default LikeDis;