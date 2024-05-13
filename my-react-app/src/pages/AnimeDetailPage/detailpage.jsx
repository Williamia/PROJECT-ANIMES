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
                <div className="anime-detail-description">
                    <div className="banner-anime" style={{ backgroundImage: `url(${anime.banner})` }} />
                    <div className="text-detail-descripton">
                        <div className="text-title-and-episodes">
                            <p className="text-anime-name">{anime.name}</p>
                            <p className="text-anime-eps">{anime.episodes} Episodes</p>
                        </div>

                        <div className="text-detail-sinopse">
                            <p className="text-sinopse title">Description</p>
                            <p>{anime.description}</p>
                        </div>

                        <div className="title-main-characters"><p>Main characters</p></div>

                        <div className="carrosel-characters">
                        {anime.characters.map((character, index) => (
                        <div className="card-characters" key={index}>
                            <img src={character.image} alt={character.name} />
                            <div className="text-character-name">
                            <p>{character.name}</p>
                            </div>
                        </div> 
                    ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}