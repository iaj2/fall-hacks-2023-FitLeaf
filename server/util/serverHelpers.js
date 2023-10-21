const BeginnerExercise = require('./beginnerExercise');
const IntermediateExercise = require('./intermediateExercise')
const AdvancedExercise = require('./advancedExercise')


const exercises = {
    beginner: [
        BeginnerExercise('Push Ups', 8, 15),
        BeginnerExercise('Jumping Jacks', 20, 30),
        BeginnerExercise('Squats', 15, 25),
        BeginnerExercise('Burpees', 5, 10),
        BeginnerExercise('Lunges', 6, 10),
        BeginnerExercise('Crunches', 10, 15),
        BeginnerExercise('Squat Jumps', 3, 5),
        BeginnerExercise('High Knees', 20, 30),
        BeginnerExercise('Mountain Climbers', 20, 30)
    ],
    intermediate: [
        IntermediateExercise('Push Ups', 15, 25),
        IntermediateExercise('Jumping Jacks', 30, 40),
        IntermediateExercise('Squats', 20, 30),
        IntermediateExercise('Burpees', 10, 15),
        IntermediateExercise('Lunges', 8, 12),
        IntermediateExercise('Crunches', 15, 20),
        IntermediateExercise('Squat Jumps', 4, 6),
        IntermediateExercise('High Knees', 30, 40),
        IntermediateExercise('Mountain Climbers', 30, 40)
    ],
    advanced: [
        AdvancedExercise('Push Ups', 20, 35),
        AdvancedExercise('Jumping Jacks', 40, 50),
        AdvancedExercise('Squats', 30, 40),
        AdvancedExercise('Burpees', 15, 20),
        AdvancedExercise('Lunges', 10, 15),
        AdvancedExercise('Crunches', 20, 30),
        AdvancedExercise('Squat Jumps', 6, 8),
        AdvancedExercise('High Knees', 40, 50),
        AdvancedExercise('Mountain Climbers', 40, 50)
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
    const randomIndex = Math.floor(Math.random() * exercises.length);
    return exercises[level][randomIndex];
}

module.exports = isValidLevel;