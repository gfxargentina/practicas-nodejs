const fs = require('fs');

//ruta donde se guardara el archivo, el directorio ya debe estar creado
const archivo = './db/data.json';

const guardarDb = (data) => {
  //guarda el archivo con la data recibida, y convierte la data a un string
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  //verifica si el archivo NO existe
  if (!fs.existsSync(archivo)) {
    return null;
  }

  //para leer el archivo que viene en formato string
  const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
  //parsear el string para que vuelva a ser un array de objetos
  const data = JSON.parse(info);
  //console.log(data);

  return data;
};

module.exports = { guardarDb, leerDB };
