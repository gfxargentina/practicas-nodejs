const { Router } = require('express');

const {
  getUsuarios,
  usuariosPost,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuarios.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste } = require('../helpers/db-validators');

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

router.put('/:id', updateUsuario);

router.delete('/', deleteUsuario);

module.exports = router;
