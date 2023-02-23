import React from "react";

const LikeDis = function () {
    return (
    <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
            <svg className="track-play__like-svg" alt="like">
                <use xlinkHref=".\images\icon\sprite.svg#icon-like"></use>
            </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg" alt="dislike">
                <use xlinkHref=".\images\icon\sprite.svg#icon-dislike"></use>
            </svg>
        </div>
    </div>
    )
}

export default LikeDis;