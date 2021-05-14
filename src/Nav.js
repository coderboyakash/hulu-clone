import React from 'react'
import './Nav.css'
import requests from './requests'

export default function Nav( { setSelectedOptions } ) {
    return (
        <div className='nav'>
            <h2 onClick = { () => setSelectedOptions( requests.fetchTrending ) }>Trending</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchTopRated ) }>Top Rated</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchActionMovies ) }>Action</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchComedyMovies ) }>Comedy</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchHorrorMovies ) }>Horror</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchRomanceMovies ) }>Romance</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchSciFi ) }>Sci-fi</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchWestren ) }>Westren</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchAnimation ) }>Animation</h2>
            <h2 onClick = { () => setSelectedOptions( requests.fetchTV ) }>TV Movie</h2>
        </div>
    )
}
