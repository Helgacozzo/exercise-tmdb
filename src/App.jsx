import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => response.json())
      .then(obj => setMovies(obj.results))
      .catch(error => console.error(error));

  }, []);

  return (

    <>

      <h1>Film del momento</h1>

      <div className='movies'>

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
