const { Router } = require('express');
const {
  getUsuarios,
  usuariosPost,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuarios.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getUsuarios);

router.post(
  '/',
  [
    check('correo', 'El correo no es valido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas de 6 letras').isLength({
      min: 6,
    }),
    check('rol', 'No es un Rol valido').isIn(['ADMIN', 'USER']),
    validarCampos,
  ],
  usuariosPost
);

router.put('/:id', updateUsuario);

router.delete('/', deleteUsuario);

module.exports = router;
