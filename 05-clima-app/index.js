require('dotenv').config();

const {
  leerInput,
  inquirerMenu,
  pausa,
  listarLugares,
} = require('./helpers/inquirer');
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
        const lugares = await busquedas.ciudad(lugar);

        //seleccionar el lugar
        const id = await listarLugares(lugares);
        const lugarSeleccionado = lugares.find((lugar) => lugar.id === id);

        //datos del clima
        const clima = await busquedas.climaLugar(
          lugarSeleccionado.lat,
          lugarSeleccionado.lng
        );

        //mostrar resultados
        console.clear();
        console.log('\nInformacion de la ciudad\n'.green);
        console.log('Ciudad:', lugarSeleccionado.nombre.green);
        console.log('Latitud:', lugarSeleccionado.lat);
        console.log('Longitud:', lugarSeleccionado.lng);
        console.log('Temperatura:', clima.temp);
        console.log('TemMinima:', clima.min);
        console.log('TempMaxima:', clima.max);
        console.log('Como esta el clima:', clima.desc.green);
    }

    //si la opcion del menu no es igual a 0 el programa sigue andando,
    //si se elije 0 se termina
    if (opcion !== 0) await pausa();
  } while (opcion !== 0);
};

main();
