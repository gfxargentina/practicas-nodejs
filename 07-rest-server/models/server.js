const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //conectar a base de datos
    this.conectarDB();

    //middlewares
    this.middlewares();

    //rutas
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    //this.app.use('/api/usuarios', require('../routes/user.routes'));
    this.app.use(this.usuariosPath, require('../routes/user.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto', this.port);
    });
  }
}

module.exports = Server;
