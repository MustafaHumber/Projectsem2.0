import React from 'react';
import './SpotifyEmbed.css';
const SpotifyEmbed = ({ playlistId }) => {
  return (
    <iframe
      title="Spotify Embed"
      src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
      width="100%"
      height="380"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;
