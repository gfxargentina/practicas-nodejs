const axios = require('axios');

class Busquedas {
  historial = ['Yerba Buena', 'Madrid', 'New York'];

  constructor() {
    //TODO: leer db si existe
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      languaje: 'es',
    };
  }

  async ciudad(lugar = '') {
    try {
      //peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();
      console.log(resp);
    } catch (error) {}

    return []; //retorna todos los lugares que coincidan con el argumento enviado
  }
}

module.exports = Busquedas;
