const fs = require('fs');

//borra la consola
console.clear();

const base = 3;
let salida = '';

console.log('======================');
console.log(`Tabla del ${base}`);
console.log('======================');

// alt+92: barra invertida \, \n: salto de linea
for (let i = 1; i <= 10; i++) {
  salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;

  console.log(`tabla-${base}.txt creada`);
});
