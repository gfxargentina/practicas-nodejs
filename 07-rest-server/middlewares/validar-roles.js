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

//operador rest ..., cuando se lo usa en el argumento de una funcion trae un array de todos los
//argumentos que se le pasen
const tieneRol = (...roles) => {
  //retorna una funcion
  return (req, res = response, next) => {
    if (!req.usuario) {
      return res.status(500).json({
        msg: 'Se quiere verificar el role sin validar el token primero',
      });
    }

    //si entre los roles que me estan enviando no inluye req.usuario.rol manda error unathorized
    if (!roles.includes(req.usuario.rol)) {
      return res.status(401).json({
        msg: `El servicio require uno de estos roles ${roles}`,
      });
    }
    next();
  };
};

module.exports = { esAdminRole, tieneRol };
