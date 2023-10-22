import './sass/workoutSection.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  LeafIcon from './assets/leaf-icon.png'

const WorkoutSection = () => {
    const [exerciseData, setExerciseData] = useState(null)
    const [time, setTime] = useState(0)
    const [isFlipped, setFlipped] = useState(false);
    const [exercisesCompleted, setExercisesCompleted] = useState(0)

    const navigate = useNavigate()


    const getExerciseData = () => {
        fetch('api/random-exercise')
        .then(response => response.json())
        .then(resultData => {
            console.log(resultData);
            setExerciseData(resultData);
            setTime(resultData.duration*1000)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        });
    }

    useEffect(() => {
        getExerciseData();
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    useEffect(() => {
        const intervalTime = 1000;
        let interval;

        if (time > 0) {
            interval = setInterval(() => {
                setTime(prev => prev - intervalTime);
            }, intervalTime);
        } else if (time <=0) {
            clearInterval(interval) // Clear the interval before making a new request
            setTime(0)
            console.log(exercisesCompleted)
            if (exercisesCompleted > 1) {
                setFlipped(true)

                setTimeout(() => {
                    setFlipped(false)
                }, 100)               
                
            }
            setExercisesCompleted(exercisesCompleted + 1)
            getExerciseData();
        }

        return () => {
            clearInterval(interval) // Clear the interval when the component unmounts or when the time variable changes
        };
    }, [time])


    return (
        <div className='workout-section-container'>
            <div className='container'>
            <p>Exercise: {exerciseData? exerciseData.name: ''}</p>
            <p>Reps: {exerciseData? exerciseData.reps : ''}</p>
            <p>Time: {(time / 1000)} </p>
            <div className={`leaf-container ${isFlipped? 'flip' : ''}`}>
               
                <img src={LeafIcon}></img>
             </div>
                    
            <button className='home-button' onClick={()=>navigate('/')}>Home</button>
            </div>
           
        </div>

    )
}

export default WorkoutSection