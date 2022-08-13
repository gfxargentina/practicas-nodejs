require('colors');

// \n -> salto de linea

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log('==================================='.green);
    console.log('  Seleccione una opcion '.green);
    console.log('===================================\n'.green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas completadas`);
    console.log(`${'4.'.green} Listar Tareas pendientes`);
    console.log(`${'5.'.green} Ccompletar Tarea(s)`);
    console.log(`${'6.'.green} Borrar Tarea`);
    console.log(`${'0.'.green} Salir \n`);

    //readline: para recibir informacion del usuario
    const readline = require('readline').createInterface({
      //pausa la aplicacion para esperar la entrada del usuario
      input: process.stdin,
      //muestra la informacion
      output: process.stdout,
    });

    //muestra la informacion atraves del stdout
    readline.question('Seleccione una opcion: ', (opt) => {
      //con las {} se muestra opt:
      //console.log({ opt });

      //para cerrar la escucha de comandos, si no se cierra se va a quedar esperando que el usuario
      //ingrese alguna opcion
      readline.close();

      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, () => {
      readline.close();

      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
