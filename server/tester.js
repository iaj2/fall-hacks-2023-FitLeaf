const BeginnerExercise = require('./exercise/beginnerExercise');

const lol = {
    e: new BeginnerExercise('name', 30, 50)
}

const bruh = lol["e"];

console.log(bruh.getRandomDuration())
