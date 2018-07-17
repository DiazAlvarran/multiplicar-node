const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('================================'.green);
    console.log(`=====Tabla de ${base}======`.green);
    console.log('================================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es e un número`);
            return;
        }

        var tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla = tabla + `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}