import { useEffect, useState } from 'react';
import './App.scss';
import MovieCard from './Components/MovieCard';
import SearchBar from './Components/SearchBar';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(obj => setMovies(obj.results))
      .catch(error => console.error(error));

  }, []);

  const handleSearch = (searchValue) => {

    if (searchValue.trim() !== '') {

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`)
        .then(response => response.json())
        .then(obj => setMovies(obj.results))
        .catch(error => console.error(error));

    }

  };

  return (

    <>

      <h1>Film del momento</h1>

      <hr />

      <SearchBar onSearch={handleSearch} />

      <div className='movie-cards-container'>

        {movies.map(movie => (

          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
            popularity={movie.popularity}
            language={movie.original_language}
          />

        ))}

      </div>

    </>

  );

}

export default App;
