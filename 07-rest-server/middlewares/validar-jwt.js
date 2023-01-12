const { response } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT = async (req, res = response, next) => {
  //leer el token del header
  const token = req.header('x-token');

  //si no esta el token muestra mensaje
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion',
    });
  }

  try {
    //verifica el token, y desestructura el uid(id) del usuario
    const { uid } = jwt.verify(token, process.env.SECRET_KEY);

    //leer el usuario que corresponda al uid
    const usuario = await Usuario.findById(uid);

    //verifica que el usuario exista y no haya sido borrado
    if (!usuario) {
      return res.status(401).json({
        msg: 'token no valido - usuario no existe en DB',
      });
    }

    //verificar si el uid tiene estado true
    if (!usuario.estado) {
      return res.status(401).json({
        msg: 'Token no valido',
      });
    }

    //coloca el usuario en la req
    req.usuario = usuario;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no valido',
    });
  }
};

module.exports = validarJWT;
