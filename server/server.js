const express = require('express')
const Exercise = require('./exercise');
const app = express()

const exercises = [
    Exercise('pushups', 10, 40, 10, 40),
    Exercise('jumping jacks', 30, 90, )
]   

app.get('/exerciseApi', (req, res) => {
    
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})