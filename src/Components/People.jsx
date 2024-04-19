import React,  {useState, useEffect} from "react";
import Card from "./People/Card";

const People = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=91c777dde03941e0f4e29b605c5fdcdf");
            const data = await response.json();
            console.log(data);
            setData(data.results.slice(0, 3));
        };
        fetchData();
    },[])

    return (
        <div className="people">
            <h1>Popular TV Shows</h1>
            <div className="inside-people">
                {data.map((item) => (
                <Card item = {item}/>
                ))}
            </div>
        </div>
    )
}

export default People;