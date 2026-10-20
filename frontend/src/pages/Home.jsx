import React from 'react'
import MovieCard from '../Component/MovieCard'
import { useState,useEffect } from 'react'
import "../css/Home.css"

import { searchMovie,getPopularMovie } from '../services/api'
function Home() {
    const [searchQuery,setsearchQuery] = useState("");
    const [movies,setMovies] =useState([])
    const [error,seterror]= useState(null)
    const [loading,setloading] = useState(true)


    useEffect(()=>{
        const loadPopularmovie = async() =>{

            try {
                const popularmovie = await getPopularMovie()
                setMovies(popularmovie)
            } catch(err) {
                console.log(err)
                seterror("Failed to load movie....")
                
            } 
            finally
            {
                setloading(false)
            }
        }
            loadPopularmovie()

    },[])
    const handlesearch = async (e) =>{
        e.preventDefault()
        if(!searchQuery.trim())return;
        if(loading) return;
        setloading(true)
        
        try{
            const searchResult = await searchMovie(searchQuery)
            setMovies(searchResult)
            seterror(null)
            
        }
        catch(err)
        {
            seterror("Failed to search movie")
        }
        finally

        {
            setloading(false)

        }
        setsearchQuery("")
    }
  return (
    <div className='home'>
        <form onSubmit={handlesearch} className='search-form'>
            <input type="text" placeholder='Search for  movies....' className=' search-input'
            value={searchQuery}
            onChange={(e)=>setsearchQuery (e.target.value)} />
            <button type = "submit" className='search-button'>Search </button>
        </form>

        {error && <div className='error-message'>{error}</div>}

        {loading ? (
            <div className='loading'>Loading...</div>
        ):(

        <div className="movies-grid">
            {movies.map((movie)=>(
                 <MovieCard movie={movie} key={movie.id}/>
                
            ))}
        </div>
        )}
    </div>
  )
}

export default Home