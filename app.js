const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const colors = require('colors');
const safe = require('colors/safe');

const argv = require('./config/yargs').argv;


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', safe.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}