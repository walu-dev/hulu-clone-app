import React, { useState, useEffect } from 'react';
import "./Results.css";
import VideoCard from "./VideoCard.js";
import axios from './axios';
import FlipMove from 'react-flip-move';

const Results= ({selectedOption})=>{
    const [movies, setMovies] = useState([])

    //linking to our database
    useEffect(() => {
       async function fetchData() {
        const request = await axios.get(selectedOption);
        setMovies(request.data.results);
        return request;
       }

       fetchData();
    }, [selectedOption]); 

    return(
        <div className="results">
            <FlipMove>
                {movies.map((movie) =>(
                 <VideoCard key={movie.id} movie={movie}/>
            ))}
            </FlipMove>
           
            
             
        </div>
    )
}
export default Results;