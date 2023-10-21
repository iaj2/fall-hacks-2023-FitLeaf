import React from 'react';
import "./sass/levelSection.scss"
import LeafIcon from './assets/leaf-icon.png'

function LevelSection() {


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
        <button className="beginner-button" >Beginner</button>
        <button className="intermediate-button" >Intermediate</button>
        <button className="advanced-button">Advanced</button>
        </div>
        
      </div>
    </div>
  );
}

export default LevelSection;
