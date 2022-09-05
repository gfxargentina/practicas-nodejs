class Busquedas {
  historial = ['Yerba Buena', 'Madrid', 'New York'];

  constructor() {
    //TODO: leer db si existe
  }

  async ciudad(lugar = '') {
    //peticion http
    console.log(lugar);

    return []; //retorna todos los lugares que coincidan con el argumento enviado
  }
}

module.exports = Busquedas;
