//optimizacion de importaciones

const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validarRoles = require('../middlewares/validar-roles');

//utiliza el operador spread para exportar todas las funciones de los middlewares
module.exports = {
  ...validarCampos,
  validarJWT,
  ...validarRoles,
};
