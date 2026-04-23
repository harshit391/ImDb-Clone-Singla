import { useState, useEffect } from "react";
import Card from "./People/Card";

const People = ({ apiKey, baseUrl }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/tv/airing_today?api_key=${apiKey}`);
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const result = await response.json();
                setData((result.results || []).slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch TV shows:", error);
            }
        };
        fetchData();
    }, [apiKey, baseUrl])

    return (
        <div className="people">
            <h1>Popular TV Shows</h1>
            <div className="inside-people">
                {data.map((item) => (
                <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default People;
