const http = require('http');

http
  .createServer((req, res) => {
    res.write('hola mundo');
    res.end();
  })
  .listen(8080);

console.log('Servidor escuchando en el puerto 8080');
