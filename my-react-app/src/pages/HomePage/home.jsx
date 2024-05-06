import './home.css'
import Footer from '../../components/footer'
import GitIcon from '../../assets/icons8-github-30.png'
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading';

export default function Home() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
     setLoading(false); 
    }, 2000)

    return () => clearTimeout(timer);

    }, []);

  return (
   <div className='header-div'>
    {loading ? (<Loading />) : (
      <div className='content'>
      <div className='content-main-text'>
        <div className='content-div-button-gitproject'>
          <button className='button-gitproject'><img src={GitIcon} alt="github" />GITHUB PROJECT</button>
        </div>
        <div className='content-text-title'>
          <p className='title-pag'>PROJECT ANIME'S</p>       
          <Link to="/*">
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

