import './App.css'
import Footer from './components/footer'
import GitIcon from '../src/assets/icons8-github-30.png'

function App() {
  
  return (
   <div className='header-div'>
        <div className='content'>
          <div className='content-main-text'>
            <div className='content-div-button-gitproject'>
              <button className='button-gitproject'><img src={GitIcon} alt="github" />GITHUB PROJECT</button>
            </div>
            <div className='content-text-title'>
              <p className='title-pag'>PROJECT ANIME'S</p>
              <button className='button-getstarted'> GET STARTED</button>
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
        <Footer />
   </div>
  )
}

export default App