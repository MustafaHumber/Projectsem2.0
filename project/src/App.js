// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Login from './components/Login';
// import TopTracks from './components/TopTracks';
// import Tracklist from './components/Tracklist';
// import Recommendations from './components/Recommendations';
// import SpotifyEmbed from './components/SpotifyEmbed';
// import { getAccessToken } from './spotify';

// function App() {
//   const [token, setToken] = useState('');
//   const [topTracks] = useState([]);

//   useEffect(() => {
//     const accessToken = getAccessToken();
//     if (accessToken) {
//       setToken(accessToken);
//     }
//   }, []);

//   return (

//     <div className="App">
//       <Header />
//       {!token ? (
//         <Login />
//       ) : (
//         <>
//           <TopTracks />
//           <Tracklist/>
//           <Recommendations seedTracks={topTracks.map(track => track.id)} />
//           <SpotifyEmbed playlistId="1vjgnb08yboXcW2kpvtoUm" />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import TopTracks from './components/TopTracks';
import Tracklist from './components/Tracklist';
import Recommendations from './components/Recommendations';
import SpotifyEmbed from './components/SpotifyEmbed';
import { getAccessToken } from './spotify';

function App() {
  const [token, setToken] = useState('');
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setToken(accessToken);
      // Assume you fetch top tracks here and set them in the state
      setTopTracks(['Track 1', 'Track 2', 'Track 3']); // Example tracks
    }
  }, []);

  return (
    <div className="App">
      <Header />
      {!token ? (
        <Login />
      ) : (
        <div className="main-content">
          <TopTracks />
          <Tracklist />
          <Recommendations seedTracks={topTracks.map((track) => track)} />
          <SpotifyEmbed playlistId="1vJgnb08yboXcW2kpvtoUm" />
        </div>
      )}
    </div>
  );
}

export default App;
