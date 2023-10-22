import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelSection from './levelSection';
import InfoSection from './infoSection';
import WorkoutSection from './workoutSection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LevelSection />} />
          <Route path="/info" element={<InfoSection />} />
          <Route path="/workout" element={<WorkoutSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
