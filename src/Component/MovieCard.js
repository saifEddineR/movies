import React from 'react'

const movieCard = ({ movieName, movieImg, movieRating }) => {
    return (
        <article className='MovieList'>
            <h3>{movieName} </h3>
            <img
                src={movieImg}
                alt="you didn't implement a valid image link"
                width='250px'
            />
            <p>rating: {movieRating} </p>
        </article>
    )
}

export default movieCard
