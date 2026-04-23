import Nav from "./Components/Navbar";
import "./App.css";
import FeaturedToday from "./Components/FeaturedToday";
import Top from "./Components/WhatToWatch";
import People from "./Components/People";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const App = () => {
  return (
    <div>
      <Nav/>
      <div className="main-container">
        <FeaturedToday apiKey={API_KEY} baseUrl={BASE_URL}/>
        <People apiKey={API_KEY} baseUrl={BASE_URL}/>
      </div>
      <Top titleCard={"Top 10 This Week"} url={`${BASE_URL}/movie/popular?api_key=${API_KEY}`}/>
      <Top titleCard={"Now Playing"} url={`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`}/>
    </div>
  )
}

export default App;
