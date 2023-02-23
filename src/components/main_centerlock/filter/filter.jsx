import React from "react";

const Filter = function () {
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn_text">исполнителю</div>
            <div className="filter__button button-year _btn_text">году выпуска</div>
            <div className="filter__button button-genre _btn_text">жанру</div>
        </div>
    )
}

export default Filter;
