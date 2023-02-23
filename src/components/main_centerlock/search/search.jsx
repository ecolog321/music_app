import React from "react";

const Search = function (){
    return (
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref=".\images\icon\sprite.svg#icon-search"></use>
            </svg>
            <input type="search" className="search__text" name="search" placeholder="Поиск" />
        </div>
    )
}

export default Search;