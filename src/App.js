import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import AnimeDetailsPage from './pages/AnimeDetailsPage';
import AnimeCharactersPage from './pages/AnimeCharactersPage';
import AnimeEpisodesPage from './pages/AnimeEpisodesPage';
import Navbar from './assets/navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:animeId/details" element={<AnimeDetailsPage />} />
        <Route path="/anime/:animeId/characters" element={<AnimeCharactersPage />} />
        <Route path="/anime/:animeId/episodes" element={<AnimeEpisodesPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
