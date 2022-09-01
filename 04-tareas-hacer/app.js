const { guardarDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
require('colors');

//menu creado manualmente sin librerias
//const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  do {
    //guarda la opcion del menu en la variable opt
    opt = await inquirerMenu();
    //console.log({ opt });

    switch (opt) {
      case '1':
        //crear opcion
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea(desc);
        break;

      case '2':
        //listar tareas
        console.log(tareas.listadoArr);
        break;
    }

    //para guardar un archivo con las tareas
    guardarDb(tareas.listadoArr);

    await pausa();

    //para usar con el menu creado manualmente sin librerias
    //if (opt !== '0') await pausa();

    //mientras opt no sea igual a 0 string se ejecuta lo de arriba
    //en los do while siempre usar promesas si no se genera un ciclo infinito
  } while (opt !== '0');
};

main();
