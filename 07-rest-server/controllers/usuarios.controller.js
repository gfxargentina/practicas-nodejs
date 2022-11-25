//autocompletado del res
const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const getUsuarios = (req, res = response) => {
  res.json({
    msg: 'get usuarios',
  });
};

const usuariosPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;

  //instancia de nuevo usuario
  const usuario = new Usuario({ nombre, correo, password, rol });

  //para encriptar tiene un valor por defecto de 10 genSaltSync(10)
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();

  res.json({
    msg: 'new usuario',
    usuario,
  });
};

const updateUsuario = async (req, res = response) => {
  const { id } = req.params;

  //desestructura para que no venga el password y google, todo lo demas de la req viene en el resto
  const { _id, password, google, correo, ...resto } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });

  res.json({
    msg: 'usuario actualizaddo',
    usuario,
  });
};

const deleteUsuario = (req, res = response) => {
  res.json({
    msg: 'delete usuarios',
  });
};

module.exports = {
  getUsuarios,
  usuariosPost,
  updateUsuario,
  deleteUsuario,
};
