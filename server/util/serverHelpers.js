const BeginnerExercise = require('../exercise/beginnerExercise');
const IntermediateExercise = require('../exercise/intermediateExercise')
const AdvancedExercise = require('../exercise/advancedExercise')


const exercises = {
    beginner: [
        new BeginnerExercise('Push Ups', 8, 15),
        new BeginnerExercise('Jumping Jacks', 20, 30),
        new BeginnerExercise('Squats', 15, 25),
        new BeginnerExercise('Burpees', 5, 10),
        new BeginnerExercise('Lunges', 6, 10),
        new BeginnerExercise('Crunches', 10, 15),
        new BeginnerExercise('Squat Jumps', 3, 5),
        new BeginnerExercise('High Knees', 20, 30),
        new BeginnerExercise('Mountain Climbers', 20, 30)
    ],
    intermediate: [
        new IntermediateExercise('Push Ups', 15, 25),
        new IntermediateExercise('Jumping Jacks', 30, 40),
        new IntermediateExercise('Squats', 20, 30),
        new IntermediateExercise('Burpees', 10, 15),
        new IntermediateExercise('Lunges', 12, 25),
        new IntermediateExercise('Crunches', 15, 20),
        new IntermediateExercise('Squat Jumps', 4, 6),
        new IntermediateExercise('High Knees', 30, 40),
        new IntermediateExercise('Mountain Climbers', 30, 40)
    ],
    advanced: [
        new AdvancedExercise('Push Ups', 25, 35),
        new AdvancedExercise('Jumping Jacks', 40, 50),
        new AdvancedExercise('Squats', 30, 40),
        new AdvancedExercise('Burpees', 15, 20),
        new AdvancedExercise('Lunges', 20, 30),
        new AdvancedExercise('Crunches', 20, 30),
        new AdvancedExercise('Squat Jumps', 6, 8),
        new AdvancedExercise('High Knees', 40, 50),
        new AdvancedExercise('Mountain Climbers', 40, 50)
    ]
    
  };
  


function isValidLevel(level) {
    if ((level == 'beginner' || level == 'intermediate') ||
    level == 'advanced')
    {
        return true
    }
    return false;
}

function getRandomExercise(level) {
    //console.log(level)
    //console.log(exercises[level])
    const randomIndex = Math.floor(Math.random() * exercises[level].length);
    return exercises[level][randomIndex];
}

module.exports = {isValidLevel, getRandomExercise} ;