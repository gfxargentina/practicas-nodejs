const fs = require('fs');

//cuando le pones el async a una funcion, por defecto ya esta regresando una promesa
//y se maneja con el try and catch
const crearArchivo = async (base, listar) => {
  try {
    let salida = '';

    // alt+92: barra invertida \, \n: salto de linea
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log('======================');
      console.log('Tabla del', base);
      console.log('======================');

      console.log(salida);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;

    //   return `tabla-${base}.txt`;
    // });
  } catch (error) {
    throw error;
  }

  //una de las formas de convertir la funcion en promesa
  //   return new Promise((resolve, reject) => {
  //     console.log('======================');
  //     console.log('Tabla del', base);
  //     console.log('======================');

  //     let salida = '';

  //     // alt+92: barra invertida \, \n: salto de linea
  //     for (let i = 1; i <= 10; i++) {
  //       salida += `${base} x ${i} = ${base * i}\n`;
  //     }

  //     fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  //       if (err) throw err;

  //       resolve(`tabla-${base}.txt creada`);
  //     });
  //   });
};

module.exports = { crearArchivo };
