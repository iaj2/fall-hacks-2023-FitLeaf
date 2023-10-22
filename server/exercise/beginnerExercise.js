const Exercise = require('./exercise')

class BeginnerExercise extends Exercise {
    constructor(name, lowerReps, upperReps) {
      super(name, 45, 60, lowerReps, upperReps)
    }
}

module.exports = BeginnerExercise