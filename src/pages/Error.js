import React from "react";
import { Link } from "react-router-dom";
import './style.css';



export default function ErrorPage() {
  return (
    <div className="error-container">
      <img src="https://media.tenor.com/STBXSVflTdcAAAAi/rem-rotating-the-finger.gif"></img>
      <h1 className="error-text">404 - Page Not Found</h1>
      <p className="error-text">Looks like this page doesn’t exist!</p>
      <Link to="/" className="home-btn" style={{ marginTop: "20px" }}>
        Go Home
      </Link>
    </div>
  );
}
