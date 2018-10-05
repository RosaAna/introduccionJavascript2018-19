exports.manipularPersonas = function(coleccionPersonas){
    coleccion = coleccionPersonas;
    return {
        //devolver número de personas mayores de edad
        mayoresEdad : function() { 
            let contador = 0;
            for (let persona of coleccion){
                if ( persona.age >= 18 ) {
                    contador++;
                }
            }
            return contador;
         },
        //devolver una coleccion (array) de objetos persona de gender Male
        male        : function() {
            let males = [];
            for (let persona of coleccion){
                if ( persona.gender == "Male" ) {
                    males.push(persona);
                }
            }
          //  console.log(males);
            return males;
         },
         //devuelve objeto Persona dado el email
        correo       : function(email) {
           // let persona = {};
            for (let persona of coleccion){
                if ( persona.email == email ) {
                    return persona;
                }
            }
        }
    }
}

/*let objeto = manipularPersonas([]);
console.log(objeto.mayoresEdad());*/