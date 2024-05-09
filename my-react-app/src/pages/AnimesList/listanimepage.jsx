import React, { useState } from "react";
import Footer from '../../components/footer'
import Menu from '../../components/menu'
import Animes from "../../components/animes";
import './listanimepage.css'
import SearchIcon from '../../../public/icons8-search-50.png'


export default function ListAnimePage(){

    const [searchTerm, setSearchTerm] = useState("");

    return(
        <div className="list-anime-page">
            <Menu />
            <div className="content-anime-page">
                <div className="text-anime-page">
                    <p>SELECT YOUR FAVORITE ANIME</p>
                </div>

                <div className="search-bar">
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Search anime..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                     <button className="search-button"><img src={SearchIcon} alt="search" /></button>
                </div>
                <Animes searchTerm={searchTerm} /> 
            </div>
            <Footer />
        </div>
    )

}