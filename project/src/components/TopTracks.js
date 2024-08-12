import React, { useEffect, useState } from 'react';
import { setTopTracks } from '../spotify';
import './TopTracks.css';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const topTracks = await setTopTracks();
        setTracks(topTracks);
      } catch (error) {
        setError('Failed to fetch top tracks');
      }
    };

    fetchTracks();
  }, []);

  const handlePlayPreview = (previewUrl) => {
    if (previewUrl) {
      const audio = new Audio(previewUrl);
      audio.play();
    } else {
      alert('No preview available for this track.');
    }
  };

  const handleLikeTrack = (trackId) => {
    alert(`Liked track with ID: ${trackId}`);
  };

  return (
    // <div className='top-tracks'>
    //   <h2>Your Top Tracks</h2>
    //   {error && <p>{error}</p>}
    //   <ul>
    //     {tracks.map(track => (
    //       <li key={track.id}>
    //         <div className="track-info">
    //           {track.name} by {track.artists.map(artist => artist.name).join(', ')}
    //         </div>
    //         <div className="track-actions">
    //           <button onClick={() => handlePlayPreview(track.preview_url)}>Play Preview</button>
    //           <button onClick={() => handleLikeTrack(track.id)}>Like</button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="top-tracks">
      <h2>Your Top Tracks</h2>
      <ul>
        <li>Track 1 - Artist</li>
        <li>Track 2 - Artist</li>
        <li>Track 3 - Artist</li>
        <li>Track 4 - Artist</li>
      </ul>
    </div>
  );
};

export default TopTracks;
