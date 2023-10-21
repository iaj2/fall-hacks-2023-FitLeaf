import React from 'react';

function intro() {
  const getMessage = () => {
    return "bal";
  };

  return (
    <div>
      <h1 className="header">{getMessage()}</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="button" style={{ marginRight: '500px' }}>Beginner</button>
        <button className="button" style={{ marginRight: '-280px' }}>Intermediate</button>
        <button className="button" style={{ marginRight: '-1060px' }}>Advanced</button>
      </div>
    </div>
  );
}

export default intro;