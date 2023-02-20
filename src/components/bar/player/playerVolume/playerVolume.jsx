import React from "react";

const PlayerVolume = function () {
    return (
        <div className="bar__volume-block volume">
            <div className="volume__content">
                <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                        <use xlinkHref=""></use></svg></div> 
                <div className="volume__progress _btn">
                    <input type="range" name="range" className="volume-progress-line _btn" /></div> 
            </div>
        </div>
    )
}

export default PlayerVolume;