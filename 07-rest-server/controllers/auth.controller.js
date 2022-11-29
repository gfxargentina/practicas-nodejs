const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const login = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: 'El usuario no existe',
      });
    }

    //verificar usuario si esta activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: 'El usuario no existe',
      });
    }

    //verificar password
    const contraseñaValida = bcryptjs.compareSync(password, usuario.password);
    if (!contraseñaValida) {
      return res.status(400).json({
        msg: 'Usuario o contraseña no validos, verifique porfavor',
      });
    }

    res.json({
      msg: 'Login ok',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};

module.exports = {
  login,
};
