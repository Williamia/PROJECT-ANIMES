import React, { useState, useEffect } from "react";
import Footer from '../../components/footer'
import Menu from '../../components/menu'
import './detailpage.css'
import { useParams } from "react-router-dom";

export default function DetailPage(){
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    console.log()

    useEffect(() => {
        fetch(`http://localhost:3000/animes/${id}`)
            .then(response => {console.log(response); return response.json()})
            .then(data => setAnime(data))
            .catch(error => console.error('Erro ao buscar detalhes do anime:', error));
    }, [id]);


    if (!anime) {
        return <div>Anime not found</div>;
    }

    return(
        <div className="div-detail-page">
            <Menu />
            <div className="anime-details">
                <div className="banner-anime" style={{ backgroundImage: `url(${anime.banner})` }}></div>
                <h1>{anime.name}</h1>
                <p>{anime.description}</p>
                <p>Episodes: {anime.episodes}</p>
                <h2>Characters</h2>
                <ul>
                    {anime.characters.map((character, index) => (
                        <li key={index}>
                            <img src={character.image} alt={character.name} />
                            <p>{character.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}