const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async () => {
  let opcion;

  do {
    opcion = await inquirerMenu();
    console.log({ opcion });

    //si la opcion del menu no es igual a 0 el programa sigue andando,
    //si se elije 0 se termina
    if (opcion !== 0) await pausa();
  } while (opcion !== 0);
};

main();
