
// import React from 'react';

// function Tracklist({ tracks }) {
//   return (
//     <div className="Tracklist">
//       {tracks.map(track => (
//         <div key={track.id} className="Track">
//           <img src={track.albumImage} alt={track.name} />
//           <div>
//             <h3>{track.name}</h3>
//             <p>{track.artist}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Tracklist;

// src/components/Tracklist.js
import React from 'react';
import './Tracklist.css';

function Tracklist() {
  return (
    <div className="tracklist">
      <h2>Tracklist</h2>
      <ul>
        <li>Track A - Artist</li>
        <li>Track B - Artist</li>
        <li>Track C - Artist</li>
        <li>Track D - Artist</li>
      </ul>
    </div>
  );
}

export default Tracklist;
