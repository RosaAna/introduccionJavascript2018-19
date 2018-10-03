let calcularletraDNI = (dni) => {
    const cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    let posicion = dni % 23;
    let letra = cadena.substring( posicion, posicion+1 );
    return letra;
}
/*for (const argument of process.argv) {
  console.log(argument);  
}*/
 if (process.argv.length < 3){
     console.log("Falta el DNI");
     process.exit(1);
 }
const dni = process.argv[2].toUpperCase();
//console.log(typeof dni);
console.log(`Procesando el dni ${dni}.....`);
const dniRegex = /^[0-9]{8}[A-Z]?$/;
if ( ! dniRegex.test(dni) ){
    console.log(`El dni ${dni} no tiene formato correcto para procesarlo`);
    process.exit(2);
}
if ( dni.length == 8) {
    console.log(`La letra del dni ${dni} es ${calcularletraDNI(dni)}`);
}
else {
    let valido = calcularletraDNI(dni.substring(0, 8)) === dni.charAt(8);
    console.log(`¿Es correcta la letra del dni  ${dni}? ${valido}`);
}
