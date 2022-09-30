const { application } = require('express');
var hbs = require('hbs');
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
//partials de hbs
hbs.registerPartials(__dirname + '/views/partials', function (err) {
  console.log(err);
});

//servir contenido estatico
app.use(express.static('public'));

//funcion tradicional
// app.get('/', function (req, res) {
//   res.send('Home page');
// });

//funcion de flecha, si en la carpeta public existe una carpeta con el nombre de esta ruta,
//el servidor envia lo que este en la carpeta public y no lo que este en este endpoint
app.get('/pagina1', (req, res) => {
  res.send('Hello World');
});

//endpoint renderizado con handlebars
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Luis',
    titulo: 'Practica NodeJS',
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });
app.get('/generic', (req, res) => {
  res.render('generic');
});

app.get('/elements', (req, res) => {
  res.render('elements');
});

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

//cuando la ruta es incorrecta cae en este endpoint
// app.get('*', function (req, res) {
//   res.send('404 | Page Not Found');
// });

//sirve contenido estatico
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
