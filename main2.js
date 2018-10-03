const fs = require('fs');
const modulo = require('./modulos/manipularPersonas');

fs.readFile('./datos/datos.csv', 'utf8', function(err, contents) {
    if (err) throw err;
   
    let personas = [];
    let lineas = contents.split("\n"); //es un array de string
    for (let i = 0; i < lineas.length - 1; i++){ //lineas.length - 1
         let persona  = {};
         let linea = lineas[i].split(','); //a cada elemento del array
         persona.firsName = linea[0];
         persona.lastName = linea[1];
         persona.email    = linea[2];
         persona.gender   = linea[3];
         persona.age      = linea[4];
        // console.log(persona);
         personas.push(persona);
       //  console.log(personas[i]);
    }
   /* console.log(personas[0]);
    console.log(personas[10]);
    console.log(personas[100]);*/

    let manipular = modulo.manipularPersonas(personas);
    console.log(manipular.mayoresEdad());


});
 

