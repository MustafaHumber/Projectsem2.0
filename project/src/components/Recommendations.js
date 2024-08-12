// import React, { useEffect, useState } from 'react';
// import { getRecommendations } from '../spotify';
// import './Recommendations.css';

// const Recommendations = ({ seedTracks }) => {
//   const [recommendedTracks, setRecommendedTracks] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       try {
//         const tracks = await getRecommendations(seedTracks);
//         setRecommendedTracks(tracks);
//       } catch (error) {
//         setError('Failed to fetch recommendations');
//       }
//     };

//     fetchRecommendations();
//   }, [seedTracks]);

//   const handlePlayPreview = (previewUrl) => {
//     if (previewUrl) {
//       const audio = new Audio(previewUrl);
//       audio.play();
//     } else {
//       alert('No preview available for this track.');
//     }
//   };

//   const handleLikeTrack = (trackId) => {
//     alert(`Liked track with ID: ${trackId}`);
//   };

//   return (
//     <div className='recommendations'>
//       <h2>Recommended Tracks</h2>
//       {error && <p>{error}</p>}
//       <ul>
//         {recommendedTracks.map(track => (
//           <li key={track.id}>
//             <div className="track-info">
//               {track.name} by {track.artists.map(artist => artist.name).join(', ')}
//             </div>
//             <div className="track-actions">
//               <button onClick={() => handlePlayPreview(track.preview_url)}>Play Preview</button>
//               <button onClick={() => handleLikeTrack(track.id)}>Like</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendations;
// src/components/Recommendations.js
import React from 'react';
import './Recommendations.css';

function Recommendations({ seedTracks }) {
  return (
    <div className="recommendations">
      <h2>Recommended Tracks</h2>
      <ul>
        {seedTracks.length > 0 ? (
          seedTracks.map((track, index) => (
            <li key={index}>{track} - Artist</li>
          ))
        ) : (
          <li>No recommendations available</li>
        )}
      </ul>
    </div>
  );
}

export default Recommendations;
