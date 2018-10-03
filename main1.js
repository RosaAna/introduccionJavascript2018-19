const rectangulo = require('./rectangulo');

let alto  = 5;
let ancho = 12;

console.log(`Área del rectángulo de alto ${alto} y ancho ${ancho} vale ${rectangulo.area(alto,ancho)}`);
console.log(`Perímetro del rectángulo de alto ${alto} y ancho ${ancho} vale ${rectangulo.perimetro(alto,ancho)}`);