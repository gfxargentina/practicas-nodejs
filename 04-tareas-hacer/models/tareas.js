const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  //un getter añade como una propiedad a la clase, este getter lo uso para retornar un nuevo array de un objeto
  get listadoArr() {
    const listado = [];

    //Object.keys devuelve un array de las propiedades del objeto, 
    //con el forEach lo recorro al array y pusheo el resultado al array listado
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
