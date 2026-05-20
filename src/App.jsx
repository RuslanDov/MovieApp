import { useState, useEffect } from "react"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import MovieGrid from "./components/MovieGrid"
import Modal from "./components/Modal"

function App() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films').then(data => data.json()).then((res) => {
      setMovies(res)
      setLoading(false)
    })
  }, [])

  const filteredMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <>
      {loading ? (<Loader />) :
        (<><Navbar search={search} setSearch={setSearch}/><MovieGrid movies={filteredMovie} onMovieClick={setSelectedMovie}/></>)}
      {selectedMovie && (
      <Modal 
      movie={selectedMovie} 
      onClose={() => setSelectedMovie(null)}
      />
      )}
    </>
  )
}

export default App
