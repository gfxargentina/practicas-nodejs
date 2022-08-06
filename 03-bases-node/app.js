const { crearArchivo } = require('./helpers/multiplicar');

//borra la consola
console.clear();

const base = 6;

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));
