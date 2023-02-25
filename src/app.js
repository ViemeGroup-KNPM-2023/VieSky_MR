const express = require('express')
const handlebars = require('express-handlebars').engine
const path = require('path')
const app = express()
const port = 3000

app.engine('hbs', handlebars({ extname: '.hbs',}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.use(express.static('src/public'))
// app.use('static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/test', (req, res) => {
  res.render('Test');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})