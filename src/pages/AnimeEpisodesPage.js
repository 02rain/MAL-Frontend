import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './style.css';



export default function AnimeEpisodesPage() {
  const { animeId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/anime/${animeId}/episodes`)
      .then(res => {
        setEpisodes(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [animeId]);

  if (loading) return <div className="main-content">Loading...</div>;

  return (
    <div className="main-content">
      <h1>Episodes</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Air Date</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map(ep => (
            <tr key={ep.mal_id}>
              <td>{ep.mal_id}</td>
              <td>{ep.title}</td>
              <td>{ep.aired ? new Date(ep.aired).toLocaleDateString() : "N/A"}</td>
              <td>{ep.score || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="home-buttons">
        <Link className="home-btn" to={`/anime/${animeId}/details`}>Back to Details</Link>
      </div>
    </div>
  );
}
