const fs = require('fs');
const modulo = require('./modulos/manipularPersonas');
let Persona =  require('./Persona.js');
fs.readFile('./datos/datos.csv', 'utf8', function(err, contents) {
    if (err) throw err;
   
    let personas = [];
    let lineas = contents.split("\n"); //es un array de string
    for (let i = 0; i < lineas.length - 1; i++){ //lineas.length - 1
        // let persona  = {};
         let linea = lineas[i].split(','); //a cada elemento del array
         let persona = new Persona(linea[0],linea[1], linea[2],
            linea[3], linea[4]);
         personas.push(persona);
    }
  

    let manipular = modulo.manipularPersonas(personas);
    console.log(`mayores de edad: ${manipular.mayoresEdad()}`);
    let males = manipular.male();
    console.log(males);
    let persona = manipular.correo("ablles5z@icio.us");
    if ( persona ) {
        console.log(persona.firsName);
    }


});
 

