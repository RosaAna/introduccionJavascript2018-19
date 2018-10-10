exports.manipularCiudades =  (setCiudades) => {
    _setCiudades = setCiudades;
    return {
        numeroCiudades : (pais) => {
            let contador = 0;
            for (let ciudad of _setCiudades){
                if ( ciudad.pais == pais ) {
                    contador++;
                }
            }
            return contador;
        }
    }
}