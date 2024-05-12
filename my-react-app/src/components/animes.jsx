import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './css/animes.css'
import IconView from '../../public/icons8-add-24.png'

function Animes({ searchTerm }) {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/animes')
            .then(response => response.json())
            .then(data => setAnimes(data))
            .catch(error => console.error('Erro ao buscar animes:', error));
    }, []);

    const filteredAnimes = animes.filter(anime =>
        anime.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="list-animes-component">
            {filteredAnimes.map((anime) => (
                <Link to={`/anime-page/${anime._id}`} key={anime._id} className="anime-link">
                    <div className="card-animes" style={{ backgroundImage: `url(${anime.image})` }}>
                        <div className="anime-text">
                            <p className="title-cards">{anime.name}</p>
                            <p className="subtitle-cards">
                                <img src={IconView} alt="more" />
                                More about <span className="title-cards more">{anime.name}</span>
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Animes;