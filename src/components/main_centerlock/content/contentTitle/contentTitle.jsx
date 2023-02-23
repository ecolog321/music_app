import React from "react";

const ContentTitle = function () {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">Исполнитель</div>
            <div className="playlist-title__col col03">Альбом</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time"></svg>
            </div>
        </div>
    )
}

export default ContentTitle;