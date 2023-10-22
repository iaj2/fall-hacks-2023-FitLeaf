import './sass/workoutSection.scss'
import { useState, useEffect } from 'react'

const WorkoutSection = () => {
    const [exerciseData, setExerciseData] = useState(null);
    const [time, setTime] = useState(0); // Set an initial value for time, 0 or any other appropriate initial value

    const getExerciseData = () => {
        fetch('api/random-exercise')
        .then(response => response.json())
        .then(resultData => {
            console.log(resultData);
            setExerciseData(resultData);
            setTime(resultData.duration*1000);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
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
            clearInterval(interval); // Clear the interval before making a new request
            setTime(0)
            getExerciseData();
        }

        return () => {
            clearInterval(interval); // Clear the interval when the component unmounts or when the time variable changes
        };
    }, [time])

    

    return (
        <div className='workout-section-container'>
            <div className='workout-container'>
                <p>Exercise: {exerciseData? exerciseData.name: ''}</p>
                <p>Reps: {exerciseData? exerciseData.reps : ''}</p>
                <p>Time: {(time / 1000)} </p>
            </div>
        </div>
    )
}

export default WorkoutSection