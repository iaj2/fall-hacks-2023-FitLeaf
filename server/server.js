const express = require('express');
const session = require('express-session');
const isValidLevel = require('./util/serverHelpers')
const app = express()

const PORT = 3000;

app.use(session({
    session: 'randomstring',
    resave: false,
    saveUninitialized: true
}))

app.use(express.json);

const exercises = [
    Exercise('pushups', 10, 40, 10, 40),
    Exercise('jumping jacks', 30, 90, )
]

app.post('/set-level', (req, res) => {
    const { level } = req.body;
    if (level && isValidLevel(level)) {
        req.session = level;
        res.status(200).json({message: `Fitness level set to ${level}`})
    } else {
        res.status(400).json({ error: 'Invalid fitness level.' });
    }
})

app.get('/random-exercise', (req, res) => {
  const { level } = req.session;
  if (level && isValidLevel(level)) {
    const exercise = getRandomExercise(level);
  } else {
    res.status(400).json({ error: 'Fitness level not set.' });
  }
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})