const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

//borra la consola
console.clear();

//const base = 6;

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creada'))
  .catch((err) => console.log(err));
