const inquirer = require('inquirer');
require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: 'que desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear Tarea',
      },
      {
        value: '2',
        name: '2. Listar tareas',
      },
      {
        value: '3',
        name: '3. Listar tareas completadas',
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },
      {
        value: '5',
        name: '5. completar tarea(s)',
      },
      {
        value: '6',
        name: '6. Borrar tarea',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.log('==================================='.green);
  console.log('  Seleccione una opcion '.green);
  console.log('===================================\n'.green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  const pregunta = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`,
    },
  ];

  //salto de linea -espacio entre lineas
  console.log('\n');
  await inquirer.prompt(pregunta);
};

module.exports = {
  inquirerMenu,
  pausa,
};
