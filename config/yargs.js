const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla de multiplicar',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 15,
        describe: 'Indica hasta qué numero se hace la multiplicación',
    })
    .argv

module.exports = argv