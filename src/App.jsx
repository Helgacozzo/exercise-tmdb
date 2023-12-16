import { useEffect, useState } from 'react'
import './App.css'
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);
  console.log(movies)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(obj => setMovies(obj.results))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
