function MovieCard({ movie, onMovieClick }) {
    return (
        <div className="movie-card" onClick={() => {onMovieClick(movie)}}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} />
        </div>
  );
}

export default MovieCard