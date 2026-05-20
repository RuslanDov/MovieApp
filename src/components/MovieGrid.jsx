import MovieCard from "./MovieCard"
import "../styles/MovieGrid.css"
import "../styles/noMessage.css"

function MovieGrid({ movies, onMovieClick }) {
    if (movies.length === 0) {
        return (
        <div className="no-movies-message">
        <span>🔍</span>
        <p>Movie not found</p>
        <small>Please enter correct name</small>
    </div>
  );
}
    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                    onMovieClick={onMovieClick}
            />
            ))}
        </div>
    );
}

export default MovieGrid;