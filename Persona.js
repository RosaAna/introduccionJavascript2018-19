module.exports = class Persona {
    constructor(firstName, lastName, email, gender, age){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.email     = email;
        this.gender    = gender;
        this.age       = age;
    }
    toString(){
        return `Me llamo ${this.firstName} ${this.lastName}`;
    }
}

/*let persona = new Persona("pepito", "garcía", "dd@ee.es", "Male", 45);
console.log(persona.toString());*/