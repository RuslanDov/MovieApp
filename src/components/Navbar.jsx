import "../styles/searchInput.css"

function Navbar({search, setSearch}) {
    return (
        <>
            <input type="text" 
            className="search-input"
            placeholder="Enter your movie..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}/>
        </>
    )
}

export default Navbar