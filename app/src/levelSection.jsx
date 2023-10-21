import React from 'react';
import "./sass/levelSection.scss"

function LevelSection() {
 const getMessage = () => {
    return "FitLeaf";
  };

  return (
    <div>
      <h1 className="header">{getMessage()}</h1>
      <h2>Become fit with every turn.</h2>
      <h3>What's your fitness level?</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="button" style={{ marginRight: '500px' }}>Beginner</button>
        <button className="button" style={{ marginRight: '-280px' }}>Intermediate</button>
        <button className="button" style={{ marginRight: '-1060px' }}>Advanced</button>
      </div>
    </div>
  );
}

export default LevelSection;
