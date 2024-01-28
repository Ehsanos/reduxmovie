import axios from 'axios';
import {Button} from 'bootstrap'
import React, {useEffect, useState} from 'react'
import {Container} from 'react-bootstrap';
import {Link ,useParams} from 'react-router-dom'

export const CardDatails = () => {
  const imgMovie = 'https://image.tmdb.org/t/p/w1280';


const pra=useParams();

const [movie,setMoie]=useState("")

const getDetails =async () =>{
const res=await axios.get(`https://api.themoviedb.org/3/movie/${pra.id}?api_key=c355b54828379ffd70496e45d1fd90a8`)
setMoie(res.data)
}


useEffect(()=>{
 getDetails();

},[])

  return (

<Container className='m-auto '>

<div className="movie p-0">
<img src={imgMovie+movie.poster_path} alt="" className="movie"/>
<div className="movie-info">

            <h3>{movie.title}</h3>

        </div>
        <div className="overview">
            <h3>overView</h3>
        {movie.overview}
        </div>
    </div>
<Link to="/" >Back</Link>

        </Container>
  )


}
