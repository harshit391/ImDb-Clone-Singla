import { useEffect, useState, useRef } from "react";
import Card from "./WhatToWatch/Card";

const Top = ({ titleCard, url }) => {
  const [data, setData] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const result = await response.json();
        setData((result.results || []).slice(0, 10));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchData();
  }, [url]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth * 2;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth * 2;
    }
  };

  return (
    <div className="top-parent">
      <h1>{titleCard}</h1>
      <div className="carousel">
        <button className="prev" onClick={scrollLeft}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <section className="top-main" ref={carouselRef}>
          <div className="top">
            {data.map((item, index) => (
              <Card item={item} index={index + 1} myClass={"whatwatch"} key={item.id} />
            ))}
          </div>
        </section>
        <button className="next" onClick={scrollRight}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Top;
