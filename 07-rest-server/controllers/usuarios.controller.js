const { response } = require('express');

const getUsuarios = (req, res = response) => {
  res.json({
    msg: 'get usuarios',
  });
};

const newUsuario = (req, res = response) => {
  res.json({
    msg: 'new usuario',
  });
};

const updateUsuario = (req, res = response) => {
  res.json({
    msg: 'update usuarios',
  });
};

const deleteUsuario = (req, res = response) => {
  res.json({
    msg: 'delete usuarios',
  });
};

module.exports = {
  getUsuarios,
  newUsuario,
  updateUsuario,
  deleteUsuario,
};
