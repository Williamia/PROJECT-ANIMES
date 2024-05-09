import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/home'
import NotFound from './pages/NotFoundPage/notfound';
import ListAnimePage from './pages/AnimesList/listanimepage';
import AnimeDetailPage from "./pages/AnimeDetailPage/detailpage";

function App() {
  
  return (
    <Router>
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/anime-page" element={<ListAnimePage />} />
        <Route path="/anime-page/:id" element={<AnimeDetailPage />} />
    
      </Routes>
    </div>
  </Router>
  )
}

export default App
