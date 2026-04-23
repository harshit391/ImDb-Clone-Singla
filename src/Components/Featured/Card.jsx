const PLACEHOLDER_IMG = "https://via.placeholder.com/500x750?text=No+Image";

const Card = ({item}) => {
    const title = item.original_title || item.original_name || "Untitled";
    const source = item.backdrop_path
        ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
        : PLACEHOLDER_IMG;
    const source2 = item.poster_path
        ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        : PLACEHOLDER_IMG;
    const over = item.overview || "";

    return (
        <div className="card" style={{width: "50rem"}}>
            <img src={source} className="card-img-top" alt={`${title} backdrop`} />
            <div className="card-body d-flex align-items-end gap-5" style={{marginTop:"-14rem"}}>
                <img src={source2} alt={`${title} poster`}/>
                <div className="inside-card-body">
                    <h3>{title}</h3>
                    <p>{over.length > 100 ? over.slice(0, 100) + "..." : over}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
