import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelSection from './levelSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LevelSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
