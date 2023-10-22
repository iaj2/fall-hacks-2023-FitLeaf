import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelSection from './levelSection';
import InfoSection from './infoSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LevelSection />} />
          <Route path="/" element={<InfoSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
