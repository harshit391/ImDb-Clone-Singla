import React from "react";

const Card = ({item}) => {
    const title = item.original_title || item.original_name;
    const source = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
    const source2 = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    const over = item.overview;
    return (
        <div className="card" style={{width: "50rem"}}>
            <img src={source} className="card-img-top" alt="..." />
            <div className="card-body d-flex align-items-end gap-5" style={{marginTop:"-14rem"}}>
                <img src={source2}/>
                <div className="inside-card-body">
                    <h3>{title}</h3>
                    <p>{over.slice(0, 100) + "..."}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;