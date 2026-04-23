import { useEffect, useState, useRef } from "react";
import Card from "./Featured/Card";

const FeaturedToday = ({ apiKey, baseUrl }) => {
    const [data, setData] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/movie/upcoming?api_key=${apiKey}`);
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const result = await response.json();
                setData(result.results || []);
            } catch (error) {
                console.error("Failed to fetch featured movies:", error);
            }
        };

        fetchData();
    }, [apiKey, baseUrl]);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
    };

    return (
        <div className="featured-today-parent">
        <h1>Trending Today</h1>
        <div className="carousel">
            <button className="prev" onClick={scrollLeft}>
            <i className="fa-solid fa-chevron-left"></i>
            </button>
            <section className="featured-today-main" ref={carouselRef}>
                <div className="featured-today">
                {data.map((item) => (
                    <Card item={item} key={item.id}/>
                ))}
                </div>
            </section>
            <button className="next" onClick={scrollRight}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        </div>
    )
}

export default FeaturedToday;
