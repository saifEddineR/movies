import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const movieCard = ({ movieName, movieImg, movieRating }) => {
    //     movieRating = parseInt(movieRating);
    //     if (isNaN(movieRating) || movieRating <= 0) {
    //         movieRating = 1
    //         alert(`Rating input is not valid !
    // default rating value is set 1`)
    //     }
    //     else if (movieRating > 5) {
    //         movieRating = 5
    //         alert(`Rating input is bigger than 5
    // default rating value is set to 5!`)
    //     }



    return (
        <article className='MovieCard'>
            <img
                src={movieImg}
                alt="you didn't implement a valid image link"
                width='250px'
            />
            <span>{movieName}</span>
            <div className='starRating'>
                <StarRatingComponent
                    className='starRatingComp'
                    name="movieRating"
                    starCount={5}
                    value={movieRating}
                />
            </div>
        </article>
    )
}

export default movieCard
