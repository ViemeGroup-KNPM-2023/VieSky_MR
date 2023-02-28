const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// Data Test
const DataFood = require('./API/Data');
const DataHome = require('./API/Home');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public/index.html'))
});

app.get('/api-menu', (req, res) => {
  res.send(DataFood)
})

app.get('/api-home', (req, res) => {
  res.send(DataHome)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})