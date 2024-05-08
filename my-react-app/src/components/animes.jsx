import React from "react";
import data from "./../pages/data/data";
import './css/animes.css'

function Animes() {
  return (
    <div className="list-animes-component">
    {data.animes.map((anime) => (
      <div className="card-animes" key={anime.id} style={{ backgroundImage: `url(${anime.imageUrl})` }}>
        <div className="anime-text"><p>{anime.title}</p></div>
      </div>
    ))}
  </div>
  );
}

export default Animes;