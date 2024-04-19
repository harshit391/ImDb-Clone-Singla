import React, { useEffect, useState, useRef } from "react";
import Card from "./WhatToWatch/Card";

const Top = ({ titleCard, url }) => {
  const [data, setData] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results.slice(0, 10));
    };
    fetchData();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth*2; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth*2; // Adjust scroll amount as needed
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
              <Card item={item} index={index + 1} myClass={"whatwatch"} key={index} />
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