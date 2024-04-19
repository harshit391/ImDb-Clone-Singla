import React, { useEffect, useState } from "react";

const Card = ({item}) => {
    const name = item.name;
    const profile_path = item.poster_path;
    const source = `https://image.tmdb.org/t/p/w500/${profile_path}`;
    const views = item.overview.slice(0, 80) + "...";
    const popularity = item.popularity;

    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={source} className="img-fluid rounded-start" style={{width:"8.4rem"}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body d-flex flex-column" style={{justifyItems:"space-evenly", height:"8rem"}}>
                <h5 className="card-title">{name}</h5>
                <p className="card-text" style={{height:"4.7rem"}}>{views}</p>
                <p className="card-text"><small className="text-body-secondary">Popularity :- {popularity}</small></p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Card;