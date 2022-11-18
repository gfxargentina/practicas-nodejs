const { Router } = require('express');
const {
  getUsuarios,
  usuariosPost,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', getUsuarios);

router.post('/', usuariosPost);

router.put('/:id', updateUsuario);

router.delete('/', deleteUsuario);

module.exports = router;
