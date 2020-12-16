import './App.css';
import React from 'react'
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
  }
]

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <MovieList movies={movies} ></MovieList>
    </div>
  );
}


export default App;
