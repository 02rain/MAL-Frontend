import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './style.css';



export default function AnimeCharactersPage() {
  const { animeId } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/anime/${animeId}/characters`)
      .then(res => {
        setCharacters(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [animeId]);

  if (loading) return <div className="main-content">Loading...</div>;

  return (
    <div className="main-content">
      <h1>Characters</h1>
      <div className="hero-grid">
        {characters.map((char) => (
          <div key={char.character.mal_id} className="hero-card">
            <img
              src={char.character.images.jpg.image_url}
              alt={char.character.name}
              className="hero-img"
            />
            <h4>{char.character.name}</h4>
            <p>{char.role}</p>
            {char.voice_actors[0] && (
              <p className="text-muted">
                VA: {char.voice_actors[0].person.name} ({char.voice_actors[0].language})
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="home-buttons">
        <Link className="home-btn" to={`/anime/${animeId}/details`}>Back to Details</Link>
      </div>
    </div>
  );
}
