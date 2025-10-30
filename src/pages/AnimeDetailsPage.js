import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './style.css';



export default function AnimeDetailsPage() {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/anime/${animeId}/details`)
      .then(res => {
        setAnime(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [animeId]);

  if (loading) return <div className="main-content">Loading...</div>;
  if (!anime) return <div className="main-content">Anime not found.</div>;

  return (
    <div className="main-content">
      <h1>{anime.title}</h1>
      <div className="card" style={{ display: "flex", gap: "20px" }}>
        <img
          src={anime.images?.jpg?.image_url}
          alt={anime.title}
          style={{ width: "200px", borderRadius: "8px" }}
        />
        <div>
          <p><strong>Type:</strong> {anime.type}</p>
          <p><strong>Episodes:</strong> {anime.episodes}</p>
          <p><strong>Score:</strong> {anime.score}</p>
          <p><strong>Status:</strong> {anime.status}</p>
          <p><strong>Year:</strong> {anime.year}</p>
          <p><strong>Genres:</strong> {anime.genres.map(g => g.name).join(", ")}</p>
        </div>
      </div>

      <p>{anime.synopsis}</p>

      <div className="home-buttons">
        <Link className="home-btn" to={`/anime/${animeId}/characters`}>Characters</Link>
        <Link className="home-btn" to={`/anime/${animeId}/episodes`}>Episodes</Link>
      </div>
    </div>
  );
}
