require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
  let opt = '';

  do {
    opt = await mostrarMenu();
    console.log({ opt });

    if (opt !== '0') await pausa();

    //mientras opt no sea igual a 0 string se ejecuta lo de arriba
    //en los do while siempre usar promesas si no se genera un ciclo infinito
  } while (opt !== '0');
};

main();
