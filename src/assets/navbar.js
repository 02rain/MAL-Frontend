import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../pages/style.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const matchAnime = location.pathname.match(/\/anime\/(\d+)/);
  const animeId = matchAnime ? matchAnime[1] : null;

  const goHome = () => navigate("/");

  return (
    <nav className="navbar">
      <button className="nav-link" onClick={goHome}>
        MAL
      </button>

      {animeId && (
        <>
          <Link
            to={`/anime/${animeId}/details`}
            className={`nav-link ${
              location.pathname.includes("details") ? "active" : ""
            }`}
          >
            Details
          </Link>

          <Link
            to={`/anime/${animeId}/characters`}
            className={`nav-link ${
              location.pathname.includes("characters") ? "active" : ""
            }`}
          >
            Characters
          </Link>

          <Link
            to={`/anime/${animeId}/episodes`}
            className={`nav-link ${
              location.pathname.includes("episodes") ? "active" : ""
            }`}
          >
            Episodes
          </Link>
        </>
      )}
    </nav>
  );
}
