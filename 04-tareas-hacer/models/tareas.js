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

  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    //para hacer un espacio
    console.log();

    this.listadoArr.forEach((tarea, i) => {
      //para mostrar las tareas en orden 1,2,3..., esto se hace porque sino
      //vendria con la posicion del array 0,1,2...
      const index = `${i + 1}`.green;

      //desestructuro la descripcion y el completadoEn de la tarea
      const { desc, completadoEn } = tarea;
      //muestro el estado de manera condicional
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
      //la salida
      console.log(`${index} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    console.log();

    let contador = 0;

    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;

      if (completadas) {
        //mostrar completadas
        if (completadoEn) {
          contador += 1;
          console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
        }
      } else {
        //mostrar pendientes
        if (!completadoEn) {
          contador += 1;
          console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
        }
      }
    });
  }
}

module.exports = Tareas;
