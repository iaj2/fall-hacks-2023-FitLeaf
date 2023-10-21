import React from 'react';

function WorkoutSection() {
  const getMessage = () => {
    return 'are you fit';
  };

  return (
    <div>
      <h1>{getMessage()}</h1>
      <button>Yes</button>
      <button>No</button>
    </div>
  );
}

export default WorkoutSection;
