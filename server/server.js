const express = require('express');
const session = require('express-session');
const isValidLevel = require('./util/serverHelpers')
const app = express()

const PORT = 5000;

app.use(session({
    secret: 'randomstring',
    resave: false,
    saveUninitialized: true
}))

app.use(express.json());

app.post('/set-level', (req, res) => {
    const { level } = req.body;
    if (level && isValidLevel(level)) {
        req.session.level = level;
        console.log(req.session.level)
        res.status(200).json({message: `Fitness level set to ${level}`})
    } else {
        res.status(400).json({ error: 'Invalid fitness level.' });
    }
})

app.get('/random-exercise', (req, res) => {
  const { level } = req.session.level;
  if (level && isValidLevel(level)) {
    const exercise = getRandomExercise(level);
    res.status(200).json({
        name: exercise.getName(),
        duration: exercise.getRandomDuration(),
        reps: exercise.getRandomReps()
    })
  } else {
    res.status(400).json({ error: 'Fitness level not set.' });
  }
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})