import "./card.css"

const PLACEHOLDER_IMG = "https://via.placeholder.com/500x750?text=No+Image";

const Card = ({item, index, myClass}) => {
    const title = item.original_title || item.original_name || "Untitled";
    const source = item.poster_path
        ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        : PLACEHOLDER_IMG;
    return (
        <div className={myClass}>
            <img src={source} alt={`${title} poster`} />
            <h4>{index + ". " + title}</h4>
            <button>Watch Options</button>
            <button><i className="fa-solid fa-play" style={{marginRight: "10px"}}></i>Trailer</button>
        </div>
    )
}

export default Card;
