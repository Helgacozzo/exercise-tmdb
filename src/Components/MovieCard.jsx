import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, overview, posterPath, popularity, language }) => {
  return (

    <div className='movie-card'>

      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />

      <div className='movie-details'>
        <h3>{title}</h3>
        <p>{overview}</p>

        <div className='info'>
          <p><strong>Popularity: </strong>{popularity}</p>
          <p><strong>Language: </strong>{language}</p>
        </div>

      </div>

    </div>
  );
};

export default MovieCard;
