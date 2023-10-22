import './sass/workoutSection.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import  LeafIcon from './assets/leaf-icon.png'

const WorkoutSection = () => {
    const [exerciseData, setExerciseData] = useState(null)
    const [time, setTime] = useState(0)
    const [initialTime, setInitialTime] = useState(0)
    const [isFlipped, setFlipped] = useState(false)
    const [exercisesCompleted, setExercisesCompleted] = useState(0)
    const [leafClass, setLeafClass] = useState('pos1')
    const initialTimerWidth = 200
    const [timerWidth, setTimerWidth] = useState(initialTimerWidth)

    const navigate = useNavigate()


    const getExerciseData = () => {
        fetch('api/random-exercise')
        .then(response => response.json())
        .then(resultData => {
            console.log(resultData);
            let duration = resultData.duration*1000
            setTimerWidth(initialTimerWidth)
            setInitialTime(duration)
            setTime(duration)
            setExerciseData(resultData);
            
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
                let newTime = time - intervalTime;
                setTime(newTime);
                setTimerWidth(initialTimerWidth * (newTime / initialTime))
            }, intervalTime);
        } else if (time <=0) {
            clearInterval(interval) // Clear the interval before making a new request
            setTimerWidth(0)
            if (exercisesCompleted >= 1) {
                setFlipped(!isFlipped)
                setTimeout( () => getExerciseData(), 800)
                

        
            }
            setExercisesCompleted(exercisesCompleted + 1)
        }

        return () => {
            clearInterval(interval) // Clear the interval when the component unmounts or when the time variable changes
        };
    }, [time])

    useEffect(() => {
        if(exercisesCompleted >= 1) {
            if(isFlipped) {
                console.log('hello')
                setTimeout(()=>setLeafClass('pos2'), 100)
                setTimeout(()=>setLeafClass('pos3'), 100)
                setTimeout(()=>setLeafClass('pos4'), 100)
            }
            else {
                console.log('hello1')

                setTimeout(()=>setLeafClass('pos5'), 100)
                setTimeout(()=>setLeafClass('pos6'), 100)
                setTimeout(()=>setLeafClass('pos1'), 100)
            }
        }
        

    }, [isFlipped])

    const timerBarStyle = {
        width: timerWidth
    }

    return (
        <div className='workout-section-container'>
            <div className='container'>
            <p><b>Exercise:</b> {exerciseData? exerciseData.name: ''}</p>
            <p><b>Reps:</b> {exerciseData? exerciseData.reps : ''}</p>
            <p><b>Exercises Completed: </b>{exercisesCompleted}</p>
            <p><b>Time:</b> {time >= 0 ? (time / 1000) : 0} </p>
            <div className='timer-bar' style={timerBarStyle}></div>
            <div className='leaf-container'>
               
            <img className={`leafImg ${leafClass}`} src={LeafIcon}></img>
             </div>
                    
            <button className='home-button' onClick={()=>navigate('/')}>Home</button>
            </div>
           
        </div>

    )
}

export default WorkoutSection