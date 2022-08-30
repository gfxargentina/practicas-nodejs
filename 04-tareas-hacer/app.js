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
        console.log(tareas._listado);
        break;
    }

    await pausa();

    //para usar con el menu creado manualmente sin librerias
    //if (opt !== '0') await pausa();

    //mientras opt no sea igual a 0 string se ejecuta lo de arriba
    //en los do while siempre usar promesas si no se genera un ciclo infinito
  } while (opt !== '0');
};

main();
