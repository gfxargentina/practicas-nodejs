const fs = require('fs');

const axios = require('axios');

class Busquedas {
  historial = [];
  dbPath = './db/database.json';

  constructor() {
    this.leerDB();
  }

  get historialCapitalizado() {
    return this.historial.map((lugar) => {
      //corta las palabras del array por el espacio
      let palabras = lugar.split(' ');

      //para transformar la primera letra de cada palabra en mayuscula,
      //p[0].toUpperCase() : 1 letra mayuscula, + p.substring(1): le suma todo el resto de la palabra
      palabras = palabras.map((p) => p[0].toUpperCase() + p.substring(1));

      //con join une el array con un espacio
      return palabras.join(' ');
    });
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

  agregarHistorial(lugar = '') {
    //verifica si el lugar ya existe en el array historial
    if (this.historial.includes(lugar.toLowerCase())) {
      return;
    }

    //muestra solo los primeros 6 resultados
    this.historial = this.historial.splice(0, 5);

    //agrega el lugar al principio del array
    this.historial.unshift(lugar.toLowerCase());

    //grabar en db
    this.guardarDB();
  }

  guardarDB() {
    //para grabar mas propiedades
    const payload = {
      historial: this.historial,
    };

    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {
    //para verificar si el archivo db existe
    if (!fs.existsSync(this.dbPath)) return;

    //para leer el archivo, si el archivo existe
    const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });

    //toma info que es un string y lo transforma en un objeto json
    const data = JSON.parse(info);

    //al ser un objeto puedo extraer el historial
    this.historial = data.historial;
  }
}

module.exports = Busquedas;
