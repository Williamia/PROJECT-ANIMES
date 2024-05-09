import React from "react";
import Footer from '../../components/footer'
import Menu from '../../components/menu'
import data from '../data/data'
import { useParams } from "react-router-dom";
import './detailpage.css'


export default function DetailPage(){

    const { id } = useParams();

    const anime = data.animes.find(anime => anime.id.toString() === id);

    if (!anime) {
        return <div>Anime not found</div>;
    }

    return(
        <div className="div-detail-page">
            <Menu />
            <div className="anime-details">
                <div className="banner-anime" style={{ backgroundImage: `url(${anime.banner})` }}></div>
            </div>
            <Footer />
        </div>
    )

}