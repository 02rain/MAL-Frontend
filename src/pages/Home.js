import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';



export default function HomePage() {
  const [animeId, setAnimeId] = useState('11617');
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-overlay">
        <img src="https://media.tenor.com/KUXIWC9D5_UAAAAi/my-hero-academia-boku-no-hero-academia.gif"></img>
        <h1 className="home-title">MyAnimeList Explorer</h1>
        <p className="home-subtitle">Enter an anime ID to explore its details</p>

        <input
          className="input-box"
          type="text"
          value={animeId}
          onChange={e => setAnimeId(e.target.value)}
        />
        <button onClick={() => navigate(`/anime/${animeId}/details`)}>Explore</button>
      </div>
    </div>
  );
}
