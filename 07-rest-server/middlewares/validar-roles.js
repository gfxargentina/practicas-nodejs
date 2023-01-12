const { response } = require('express');

const esAdminRole = (req, res = response, next) => {
  //verificar que la request tenga el usuario
  if (!req.usuario) {
    return res.status(500).json({
      ERROR: 'Se quiere verificar el role sin validar el token primero',
    });
  }

  //desestructura el rol y el nombre del usuario que viene de la request
  const { rol, nombre } = req.usuario;

  //verifica que el usuario sea ADMIN
  if (rol !== 'ADMIN_ROLE') {
    return res.status(401).json({
      ERROR: `${nombre} no es administrador - NO puede hacer la operacion solicitada`,
    });
  }

  next();
};

module.exports = { esAdminRole };
