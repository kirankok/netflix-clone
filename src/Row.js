import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

function Row({ title, fetchUrl, isLargeRow }) {
  const [ movies, setMovies ] = useState([]);
  const [ trailerUrl, setTrailerUrl ] = useState('');

  useEffect(
    () => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      }
      fetchData();
    },
    [ fetchUrl ]
  );

  const handleClick = movie => {
    debugger;
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie.name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          debugger;
          setTrailerUrl(urlParams.get('v'));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies &&
          movies.map(movie => (
            <img
              key={movie.id}
              // onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
