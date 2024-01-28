import React, {useState} from 'react'
import image from '../img/img.png'
import {Link} from 'react-router-dom';

export const Card = ({movie}) => {
  const imgMovie = 'https://image.tmdb.org/t/p/w1280';
  return (
<Link to={`/mov/${movie.id}`}>
    <div className="movie">
<img src={imgMovie+movie.poster_path} alt=""/>
<div className="movie-info">

            <h3>{movie.title}</h3>

        </div>
        <div className="overview">
            <h3>overView</h3>
        {movie.overview}
        </div>
    </div>

    </Link>
  )
}
