const fs = require('fs');
let Ciudad = require('./Ciudad');
let manipularCiudades = require('./modulos/manipularCiudades');

fs.readFile('./datos/ciudades.csv', 'utf8', (err, data) => {
    if (err) throw err;
    let lineas = data.split('\n');
    let conjutoCiudades = new Set();
    for (let i = 1; i < lineas.length -1; i++){
        let campos = lineas[i].split(',');
        conjutoCiudades.add(new Ciudad(campos[0], campos[1], campos[2],
            campos[3]));    
    }
    let manipular = manipularCiudades.manipularCiudades(conjutoCiudades);
    let pais = 'Polania';
    console.log
        (`Nº ciudades de ${pais} son ${manipular.numeroCiudades(pais)}`);
})
