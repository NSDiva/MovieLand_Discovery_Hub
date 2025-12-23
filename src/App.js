import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=40fec40d'; // I've added a temporary key for testing

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    console.log("Searching for:", title); // Log the search term
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    console.log("API Response:", data); // THIS IS KEY: Check your console for this!
    
    if (data.Search) {
      setMovies(data.Search);
    } else {
      console.log("No movies found in API response");
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies('');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      <div className="container">
        {movies.map((movie, index) => (
          /* By adding index to the key, we make it unique even if the ID is duplicated */
          <MovieCard movie={movie} key={`${movie.imdbID}-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default App;