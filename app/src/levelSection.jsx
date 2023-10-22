import React from 'react';
import "./sass/levelSection.scss"
import LeafIcon from './assets/leaf-icon.png'
import { useNavigate } from 'react-router-dom'

function LevelSection() {
  const navigate = useNavigate()

  const handleButtonClick = (level) => {
    fetch('api/set-level', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ level: level }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // You can handle the response from the backend here
        navigate('/info')
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };



  return (
    <div className='level-section-container'>
      <div className='header-wrapper'>
        <h1 className="fitleaf-header">FitLeaf <img src={LeafIcon} alt=''></img></h1>
      </div>
      <div className='tagline-wrapper'>
        <h2 className='fitleaf-tagline'>Fitter with every turn.</h2>
      </div>
     <div className='level-header-wrapper'>
      <h3 className='fitness-level-header'>What's your fitness level?</h3>
     </div>
      
      <div className='buttons-container'>
        <div className='buttons-wrapper'>
          <button className="beginner-button" onClick={() => handleButtonClick('beginner')}>Beginner</button>
          <button className="intermediate-button" onClick={() => handleButtonClick('intermediate')}>Intermediate</button>
          <button className="advanced-button" onClick={() => handleButtonClick('advanced')}>Advanced</button>
        </div>
        
      </div>
    </div>
  );
}

export default LevelSection;
