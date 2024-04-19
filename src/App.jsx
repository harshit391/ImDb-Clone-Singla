import React from "react";
import Nav from "./Components/Navbar";
import "./App.css";
import FeaturedToday from "./Components/FeaturedToday";
import Top from "./Components/WhatToWatch";
import People from "./Components/People";
const App = () => {
  return (
    <div>
      <Nav/>
      <div className="main-container">
        <FeaturedToday/>
        <People/>
      </div>
      <Top titleCard={"Top 10 This Week"} url={"https://api.themoviedb.org/3/movie/popular?api_key=91c777dde03941e0f4e29b605c5fdcdf"}/>
      <Top titleCard={"Now Playing"} url={"https://api.themoviedb.org/3/movie/now_playing?api_key=91c777dde03941e0f4e29b605c5fdcdf"}/>
    </div>
  )
}

export default App;