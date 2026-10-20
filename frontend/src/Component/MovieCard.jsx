
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import Favourites from "../pages/Favourites";
function MovieCard({ movie }) {
    const {isfav,addtofav,removefav} = useMovieContext()
    const favorite = isfav(movie.id)
    function onFavouriteClick(e) {
        // alert("Clicked");
        e.preventDefault()
        if(favorite) removefav(movie.id)
        else addtofav(movie)
    }

    return (
        <div className="movie_card">
            <div className="movie_poster">
                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "/placeholder.png"
                    }
                    alt={movie.title || "Movie poster"}
                />

                <div className="movie_overlay">
                    <button
                        type="button"
                        className={`favourite_btn${favorite ? "active":""}`}
                        onClick={onFavouriteClick}
                        aria-label={`Add ${movie.title} to favourites`}
                    >
                        🤍
                    </button>
                </div>
            </div>

            <div className="movie_info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;
