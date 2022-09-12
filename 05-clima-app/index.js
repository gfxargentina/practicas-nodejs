require('dotenv').config();

const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
  //instanciamos la clase
  const busquedas = new Busquedas();
  let opcion;

  do {
    opcion = await inquirerMenu();
    //console.log({ opcion });

    switch (opcion) {
      case 1:
        //mostrar mensaje
        const lugar = await leerInput('Ciudad: ');
        //buscar los lugares
        await busquedas.ciudad(lugar);

        //seleccionar el lugar

        //datos del clima

        //mostrar resultados
        console.log('\nInformacion de la ciudad\n'.green);
        console.log('Ciudad:');
        console.log('Latitud:');
        console.log('Longitud:');
        console.log('Temperatura:');
        console.log('TemMinima:');
        console.log('TempMaxima:');
    }

    //si la opcion del menu no es igual a 0 el programa sigue andando,
    //si se elije 0 se termina
    if (opcion !== 0) await pausa();
  } while (opcion !== 0);
};

main();
