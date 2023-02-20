import React from "react";

const ContentTitle = function () {
    return (
        <div className="content__title playlist-title">
            <div className="playlis-title__col col101">Трек</div>
            <div className="playlis-title__col col102">Исполнитель</div>
            <div className="playlis-title__col col103">Альбом</div>
            <div className="playlis-title__col col104">
                <svg className="playlist-title__svg" alt="time"></svg>
            </div>
        </div>
    )
}

export default ContentTitle;