import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Banner() {
  const [ movie, setMovie ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetfilxOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{ backgroundImage: `url(${base_url}${movie.backdrop_path})`, backgroundPosition: 'center center' }}
    >
      <div className="banner__contents">
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner_description">{movie.overview && truncate(movie.overview, 500)}</p>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
