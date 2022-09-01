const fs = require('fs');

const guardarDb = (data) => {
  //ruta donde se guardara el archivo, el directorio ya debe estar creado
  const archivo = './db/data.json';

  //guarda el archivo con la data recibida
  fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = { guardarDb };
