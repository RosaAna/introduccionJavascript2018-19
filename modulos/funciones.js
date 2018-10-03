exports.calcularletraDNI = (dni) => {
    const cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    let posicion = dni % 23;
    let letra = cadena.substring( posicion, posicion + 1 );
    return letra;
}