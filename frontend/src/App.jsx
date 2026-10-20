// import MovieCard from './Component/MovieCard'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import './css/App.css'
import Favourite from './pages/Favourites'
import Navbar from './Component/Navbar'
import { MovieProvider } from './contexts/MovieContext'
function App() {
  // const movieNumber =2

  return (
    <MovieProvider>
      <Navbar></Navbar>
    <main>
      <Routes >
        <Route path='/' element ={<Home/>}/>
        <Route path='/Favourite' element ={<Favourite/>}/>

      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App

