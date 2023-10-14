// console.clear();
const {crearArchivo} = require('./helpers/crearArchivo');
const argv = require('./config/yargs');


console.log(argv)

// const base = 3;

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))