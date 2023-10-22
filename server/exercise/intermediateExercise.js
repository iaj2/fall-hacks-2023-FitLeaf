const Exercise = require('./exercise')

class IntermediateExercise extends Exercise {
    constructor(name, lowerReps, upperReps) {
      super(name, 60, 75, lowerReps, upperReps)
    }
}

module.exports = IntermediateExercise;