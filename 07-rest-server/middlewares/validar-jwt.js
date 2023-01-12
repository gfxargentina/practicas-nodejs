const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {
  //leer el token del header
  const token = req.header('x-token');

  //si no esta el token muestra mensaje
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion',
    });
  }

  try {
    //verifica el token, y desestructura el uid del usuario
    const { uid } = jwt.verify(token, process.env.SECRET_KEY);
    //coloca el uid del usuario en la req
    req.uid = uid;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no valido',
    });
  }
};

module.exports = validarJWT;
