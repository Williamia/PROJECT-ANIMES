import './home.css'
import Footer from '../../components/footer'
import GitIcon from '../../../public/icons8-github-30.png'
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading';
import './homeMobile.css'

export default function Home() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
     setLoading(false); 
    }, 3000)

    return () => clearTimeout(timer);

    }, []);

  return (
   <div className='header-div'>
    {loading ? (<Loading />) : (
      <div className='content'>
      <div className='content-main-text'>
        <div className='content-div-button-gitproject'>
  
          <button className='button-gitproject'><a href="https://github.com/Williamia/PROJECT-ANIMES"><img src={GitIcon} alt="github" />GITHUB PROJECT</a></button>
         
        </div>
        <div className='content-text-title'>
          <p className='title-pag'>PROJECT ANIME'S</p>     
          <div className='images-mobile-view'></div>  
          <Link className='link-mobile-view' to="/">
            <button className='button-getstarted'>GET STARTED</button>
          </Link>
        </div>
      </div>

      <div className='images-header-pag'>
        <div className='images-content tree-divs'>
            <div className='image-pag one'></div>
            <div className='image-pag two'></div>
            <div className='image-pag tree'></div>
        </div>
        <div className='images-content two-divs'>
            <div className='image-pag four'></div>
            <div className='image-pag five'></div>
        </div>
      </div>
    </div>
    )}     
     <Footer />   
   </div>

  )
}

