import React from "react";
import './notfound.css'
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <div className="body-notfound">
           <div className="content-not-found">
            <div className="text-not-found">
            <p className="title-not-found">Whoops, seems like you're lost.</p>
            <p className="subtitle-not-found">The page you are looking for doesn't exist or an other error ocurred.</p>
            <Link to="/">
            <button className='button-goback'>GO BACK TO HOME</button>
            </Link>
            </div>
            <div className="image-div-not-found"/>
           </div>
        </div>
    )

}