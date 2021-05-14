import React from 'react'
import VideoCard from './VideoCard'
import './Result.css';
import { useState } from 'react';
import axios from './axios';
import { useEffect } from 'react';
import FlipMove from 'react-flip-move';


export default function Result({ selectedOptions }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOptions);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [selectedOptions])
    return (
        <div className='results'>
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />          
                ))}
            </FlipMove>
        </div>
    )
}
