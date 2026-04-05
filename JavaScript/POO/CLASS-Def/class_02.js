//tipos de declaracion de clases

class Paper{
    //          altura, ancho
    constructor(height, width){
        this.height = height
        this.width = width
    }
}

//forma: ANONIMA porque no tiene un nombre, se asigna a una variable, pero la clase no tiene un nombre propio

let Paper_A = class{
    //          altura, ancho
    constructor(height, width){
        this.height = height
        this.width = width
    }
}


//forma: NOMBRADA porque la clase tiene un nombre propio, aunque se asigna a una variable, la clase tiene un nombre propio, que es Paper_C

let Paper_B = class Paper_C {
    //          altura, ancho
    constructor(height, width){
        this.height = height
        this.width = width
    }
}

let Paper_z = new Paper(10, 20)