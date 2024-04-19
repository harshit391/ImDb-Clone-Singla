import React from "react";
import "./card.css"

const Card = ({item, index, myClass}) => {
    const id = index;
    const title = item.original_title || item.original_name;
    const source = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    return (
        <div className={myClass}>
            <img src={source} alt="zoro" />
            <h4>{id + ". " + title}</h4>
            <button>Watch Options</button>
            <button><i className="fa-solid fa-play" style={{marginRight: "10px"}}></i>Trailer</button>
        </div>
    )
}

export default Card;