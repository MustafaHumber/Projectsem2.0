// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Spotify App</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/tracklist">Tracklist</a>
        <a href="/toptracks">Top Tracks</a>
      </nav>
    </div>
  );
}

export default Header;

