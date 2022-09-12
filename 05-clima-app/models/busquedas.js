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

      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {}

    return [];
  }

  //getter de los parametros de la api openweather
  get paramsWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: 'metric',
      lang: 'es',
    };
  }

  async climaLugar(lat, lon) {
    try {
      //instancia de axios
      const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeather, lat, lon },
      });

      const resp = await instance.get();
      const { weather, main } = resp.data;

      //weather es un array de objetos por eso se le pone [] para que lo muestre bien y no salga undefined
      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };

      //res.data
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Busquedas;
