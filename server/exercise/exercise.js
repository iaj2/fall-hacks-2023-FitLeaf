
class Exercise {
    constructor(name, lowerDuration, upperDuration, lowerReps, upperReps) {
      this.name = name;
      this.lowerDuration = lowerDuration; // in seconds
      this.upperDuration = upperDuration; // in seconds
      this.lowerReps = lowerReps;
      this.upperReps = upperReps;
    }

    getName() {
      return this.name;
    }
  
    getRandomDuration() {
      return Math.floor(Math.random() * (this.upperDuration - this.lowerDuration + 1)) + this.lowerDuration;
    }
  
    getRandomReps() {
   
      return Math.floor(Math.random() * (this.upperReps - this.lowerReps + 1)) + this.lowerReps;
    }
}


module.exports = Exercise;