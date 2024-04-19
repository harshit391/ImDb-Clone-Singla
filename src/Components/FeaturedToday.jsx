import React, { useEffect, useState, useRef } from "react";
import Card from "./Featured/Card";

const FeaturedToday = () => {
    const [data, setData] = useState([]);
    const carouselRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=91c777dde03941e0f4e29b605c5fdcdf");
            const data = await response.json();
            setData(data.results);

            const another = await fetch("https://api.themoviedb.org/3/person/popular?api_key=91c777dde03941e0f4e29b605c5fdcdf");
            const anotherData = await another.json();
            console.log(anotherData);
        };
 
        fetchData();
        
      }, []);

      const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth; // Adjust scroll amount as needed
        }
      };
    
      const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += carouselRef.current.offsetWidth; // Adjust scroll amount as needed
        }
      };


    return (
        <div className="featured-today-parent">
        <h1>Tending Today</h1>
        <div className="carousel">
            <button className="prev" onClick={scrollLeft}>
            <i className="fa-solid fa-chevron-left"></i>
            </button>
            <section className="featured-today-main" ref={carouselRef}>
                <div className="featured-today">
                {data.map((item) => (
                    <Card item={item}/>
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