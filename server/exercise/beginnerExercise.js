const Exercise = require('./exercise')

class BeginnerExercise extends Exercise {
    constructor(name, lowerReps, upperReps) {
      super(name, 60, 90, lowerReps, upperReps)
    }
}

module.exports = BeginnerExercise