import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/home'
import NotFound from './pages/NotFoundPage/notfound';
import ListAnimePage from './pages/AnimesList/listanimepage';

function App() {
  
  return (
    <Router>
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/anime-page" element={<ListAnimePage />} />
    
      </Routes>
    </div>
  </Router>
  )
}

export default App
