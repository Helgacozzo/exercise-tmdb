const MovieCard = ({ title, overview, posterPath, popularity, language }) => {
  
    return (

      <div className='movie-card'>

        <h2>{title}</h2>
        <p>{overview}</p>
  
        <div>
            <figure>
              <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
            </figure>
        </div>
  
        <p>Popularity: {popularity}</p>
        <p>Language: {language}</p>
      </div>

    );

  };
  
  export default MovieCard