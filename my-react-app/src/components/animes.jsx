import React from "react";
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
      <div className="card-animes" key={anime.id} style={{ backgroundImage: `url(${anime.imageUrl})` }}>
        <div className="anime-text">
            <p className="title-cards">{anime.title}</p>

            <p className="subtitle-cards"><img src={IconView} alt="more" />More about <p className="title-cards more">{anime.title}</p></p>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Animes;