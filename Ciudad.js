module.exports = class Ciudad {
    constructor (nombre, pais, latitud, longitud){
        this.nombre   = nombre;
        this.pais     = pais;
        this.latitud  = latitud;
        this.longitud = longitud;
    }
    estaAlNorte () {
        return this.latitud > 0 && this.latitud < 90;
    }
    estaAlEste  () {
        return this.longitud > 0;
    }
}

/*let ciudad = new Ciudad('Jaén', 'España','37.8258451' ,'-3.7331593' );
console.log(ciudad.estaAlEste());*/