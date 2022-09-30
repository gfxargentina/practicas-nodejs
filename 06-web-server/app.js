const { application } = require('express');
const express = require('express');
const app = express();

//servir contenido estatico
app.use(express.static('public'));

const port = 3000;

//funcion tradicional
// app.get('/', function (req, res) {
//   res.send('Home page');
// });

//funcion de flecha, si en la carpeta public existe una carpeta con el nombre de esta ruta,
//el servidor envia lo que este en la carpeta public y no lo que este en este endpoint
app.get('/pagina1', (req, res) => {
  res.send('Hello World');
});

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
