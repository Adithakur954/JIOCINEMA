import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Tags from '../components/tags/Tags'
import Channel from'../components/channels/Channel.jsx'
import Carsousel from '../components/carousel/Carsousel.jsx'
import Featured from '../components/featured/Featured.jsx'
import Shows from '../components/shows/Shows.jsx'


function Home() {
let [movies, setMovies] = useState([]);
let [featuredmovies, setFeaturedmovies] = useState([])
let [dramamovies, setDramamovies] = useState([])
let [hindimovies, setHindimovies] = useState([])
let [topmovies, setTopmovies] = useState([])

useEffect(async ()=>{
try{
let moviesresponse = await fetch("http://localhost:3000/movies")
let moviesdata = await moviesresponse.json()

let featmovie = moviesdata.filter((movie)=>{return movie.featured===true})
setFeaturedmovies(featmovie.slice(0,5))

let dramovie = moviesdata.filter((movie)=>{return movie.genre.includes("Drama")})
setDramamovies(dramovie.slice(0,6))

let hinmovie = moviesdata.filter((movie)=>{return movie.language==="Hindi"})
setHindimovies(hinmovie.slice(0,6))


let topratedmovies = moviesdata.filter((movie)=>{return movie.imdb>=8.5})
setTopmovies(topratedmovies.slice(0,6))

setMovies(moviesdata)
}
catch(err)
{
  console.log(err)
}
},[])

  return (
    <>
      <Header movies={movies}/>
      <Tags />
      <Carsousel/>
      <Channel/>
      <Featured movies={featuredmovies}/>

      <Shows title ="Action Movie" movies ={dramamovies}/>
      <Shows title ="Hindi Language Movie" movies={hindimovies}/>
      <Shows title ="English Language Movie" movies={topmovies}/>
      
    </>
  )
}

export default Home
