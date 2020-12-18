import './App.css';
import React, { useState } from 'react'
// import Filter from './Component/Filter'
import MovieList from './Component/MovieList'
import NavBar from './Component/NavBar'

const movies = [
  {
    id: 0,
    movieName: 'John Wick 1',
    movieImg: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
    movieRating: 5
  }, {
    id: 1,
    movieName: 'Creed',
    movieImg: 'https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg',
    movieRating: 4
  }, {
    id: 2,
    movieName: 'Avengers Endgame',
    movieImg: 'https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg',
    movieRating: 3
  }, {
    id: 3,
    movieName: 'Spiderman Homecoming',
    movieImg: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg',
    movieRating: 3
  }
]

function App() {
  const [rating, setRating] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const getData = (rate, textSearch) => {
    setRating(rate);
    setSearchInput(textSearch);
  }


  return (
    <div>
      <NavBar getData={getData} ></NavBar>
      <MovieList
        movies={movies}
        rating={rating}
        searchInput={searchInput}
      >
      </MovieList>
    </div>
  );
}


export default App;
