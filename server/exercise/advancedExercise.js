const Exercise = require('./exercise')

class AdvancedExercise extends Exercise {
    constructor(name, lowerReps, upperReps) {
      super(name, 75, 90, lowerReps, upperReps)
    }
}

module.exports = AdvancedExercise;