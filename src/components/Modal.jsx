import "../styles/Modal.css";

function Modal({ movie, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>Close</button>
                
                <img src={movie.image} alt={movie.title} />
                
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                
                <small>Release: {movie.release_date}</small>
            </div>
        </div>
    );
}

export default Modal;