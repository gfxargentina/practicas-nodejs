const { Router } = require('express');

const {
  getUsuarios,
  usuariosPost,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuarios.controller');
const { check } = require('express-validator');

//optimizacion de importaciones
const {
  validarCampos,
  validarJWT,
  esAdminRole,
  tieneRol,
} = require('../middlewares');

const {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
} = require('../helpers/db-validators');

const router = Router();

router.get('/', getUsuarios);

router.post(
  '/',
  [
    check('correo').custom(emailExiste),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas de 6 letras').isLength({
      min: 6,
    }),
    //check('rol', 'No es un Rol valido').isIn(['ADMIN', 'USER']),
    check('rol').custom(esRoleValido),
    validarCampos,
  ],
  usuariosPost
);

router.put(
  '/:id',
  [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos,
  ],
  updateUsuario
);

router.delete(
  '/:id',
  [
    validarJWT,
    tieneRol('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos,
  ],
  deleteUsuario
);

module.exports = router;
