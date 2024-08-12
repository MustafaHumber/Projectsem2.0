// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Tracklist from './components/Tracklist';
import TopTracks from './components/TopTracks';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tracklist" element={<Tracklist />} />
        <Route path="/toptracks" element={<TopTracks />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
