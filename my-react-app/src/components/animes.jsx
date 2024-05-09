import React from "react";
import { Link } from "react-router-dom";
import data from "./../pages/data/data";
import './css/animes.css'
import IconView from '../../public/icons8-add-24.png'

function Animes({ searchTerm }) {

    const filteredAnimes = data.animes.filter(anime =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="list-animes-component">
    {filteredAnimes.map((anime) => (
    <Link to={`/anime-page/${anime.id}`} key={anime.id} className="anime-link">
      <div className="card-animes" style={{ backgroundImage: `url(${anime.imageUrl})` }}>
        <div className="anime-text">
            <p className="title-cards">{anime.title}</p>

            <p className="subtitle-cards"><img src={IconView} alt="more" />More about <span className="title-cards more">{anime.title}</span></p>
        </div>
      </div>
    </Link>
    ))}
  </div>
  );
}

export default Animes;