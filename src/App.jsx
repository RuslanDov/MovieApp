import { useState, useEffect, use } from "react"
import Loader from "./Loader"
import Navbar from "./components/Navbar"
import MovieGrid from "./components/MovieGrid"

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  return (
    <>
    {loading ? (<Loader />) :
      (<><Navbar /><MovieGrid /></>)}
    </>
  )
}

export default App
