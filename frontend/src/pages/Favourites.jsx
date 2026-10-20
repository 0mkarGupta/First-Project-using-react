
import React from 'react';
import "../css/Favourites.css";
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../Component/MovieCard';
export default function Favourites() {
  const {favourites} = useMovieContext()

  if(favourites)
  {
    return(
    <div className='favourites'>

      <h2>Your Favourite</h2>

      <div className="movies-grid">
            {favourites.map((movie)=>(
              <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
    )
  }
  return (
    <div className="Favourites">

      <div className="Favourites-empty">
        <h2>No Favourites Yet</h2>
        <p>
          Add your favourite movies here, and they
          will appear on this page.
        </p>
      </div>
    </div>
  );
}
