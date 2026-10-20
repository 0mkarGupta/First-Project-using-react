import { createContext, useState,useContext,useEffect } from "react";

const MovieContext  = createContext()

export const useMovieContext =()=> useContext(MovieContext)

export const  MovieProvider =({children})=>{
    const [favourites,setfavourites] = useState([])

    useEffect(()=>{
        const storeFav = localStorage.getItem("favorites")
        if(storeFav) setfavourites(JSON.parse(storeFav))
    },[])

    useEffect(()=>{
        localStorage.setItem('favourites', JSON.stringify(favourites))
    },[favourites])

    const addtofav =(movie)=>{
        setfavourites(prev=>[...prev,movie])
    }

    const removefav=(movieID)=>{
        setfavourites(prev=>prev.filter(movie=>movie.id !== movieID))
    }

    const isfav =(movieID)=>{
        return favourites.some(movie =>movie.id===movieID)
    }
    const val ={
        favourites,
        addtofav,
        removefav,
        isfav
    }
    return <MovieContext.Provider value={val}>
        {children}
    </MovieContext.Provider>
}