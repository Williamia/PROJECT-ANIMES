import React from "react";
import Footer from '../../components/footer'
import Menu from '../../components/menu'
import Animes from "../../components/animes";
import './listanimepage.css'

export default function ListAnimePage(){
    return(
        <div className="list-anime-page">
            <Menu />
            <div className="content-anime-page">
                <div className="text-anime-page">
                    <p>SELECT YOUR FAVORITE ANIME</p>
                </div>
                <Animes />
            </div>
            <Footer />
        </div>
    )

}