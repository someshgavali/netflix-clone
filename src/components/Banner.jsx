import './Banner.css'
import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from '../axios'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetFlixOriginals)
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        )
        return request
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  function truncateDesc(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_des">{truncateDesc(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fade_bottom"></div>
    </header>
  )
}

export default Banner
