const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// Data Test
const DataFood = require('./Data');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public/index.html'))
});

app.get('/menu', (req, res) => {
  res.send(DataFood)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})