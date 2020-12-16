import React, { useState } from 'react'
import MovieCard from './MovieCard'
import ModalInput from './ModalInput'

const MovieList = ({ movies }) => {
    const [newMovies, setNewMovies] = useState(movies);

    const getNewMovie = (data) => {
        console.log('data received:', data);
        setNewMovies([...newMovies, data])
    }

    return (
        <div className='main'>
            {newMovies.map((el, index) => {
                return (
                    <MovieCard key={index} {...el} />
                )
            })}
            <ModalInput movies={movies} getNewMovie={getNewMovie} />
        </div>
    )
}

export default MovieList
