( function () {
    console.log ( global ) ; // undefined
   // console.log ( local ) ; // undefined
    if ( true ) {
    var global = " I ’m global " ;
    let local = " I ’m only local " ;
    }
    console.log ( global ) ; // I ’m global
   // console.log ( local ) ; // undefined
    }) () ;