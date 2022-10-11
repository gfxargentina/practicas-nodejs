const { Router } = require('express');
const {
  getUsuarios,
  newUsuario,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', getUsuarios);

router.post('/', newUsuario);

router.put('/:id', updateUsuario);

router.delete('/', deleteUsuario);

module.exports = router;
