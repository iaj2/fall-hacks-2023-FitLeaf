import './sass/infoSection.scss'
import { useNavigate } from 'react-router-dom'

const InfoSection = () => {
    const navigate = useNavigate()


    return (
        <div className='info-section-container'>
            <div className='info-container'>
            <h2 className='header'>Instructions</h2>
            <p className='description'>
                You will be given an exercise and a certain time to complete it. 
                Every time the leaf flips you will be challenged with a new exercise.
                Try to complete exercises for as long as possible. The longer you go,
                the stronger you'll become... truly turning over a 'new leaf' and becoming 
                the best and strongest version of yourself.
            </p>
            <p className='good-luck'>
                GoodLuck!
            </p>
            <button className='continue-button' onClick={() => navigate('/workout')}>
                Continue
            </button>
            </div>
        </div>
    )
}

export default InfoSection