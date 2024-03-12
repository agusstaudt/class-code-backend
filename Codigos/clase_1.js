// 1. Declaración de variables
// var, let, const
// var nombre = 'Agus' 
// No se recomienda usar más var

// let nombre = 'Agus'; 
// nombre = 'Juan';

let nombre = 'Juan';
nombre = 'Juano';

/* 
 vamos a usar let y const para declarar una variable
 Si quiero declarar una variable con const surge el 
 problema de que no podré modificar esa variable, me arrojaría un error
*/

// 2. Tipos de datos
// String
let nuevaVariable = 'Agus';
// Numerico
let cantidad = 34;
// Booleano
let llueve = true;
let llueve2 = false;

// null: la ausencia de valor
let isNull = null;

// undefined
let isUndefined = undefined;

// arrays
// Las posiciones arrancan desde el cero
const numeros = [100, 200, 300, 400, 500];
console.log(numeros[0]) // para imprimir

// objeto
const usuario = {
    nombre: 'Mauricio',
    apellido: 'Peripi',
    hinchaEquipo: 'River',
    direccion: 'Posadas',
    cursos:['react', 'python','javascript']
};

// Funciones
function saludar(){ 
    console.log('weeeps')
}

saludar();
const saludar2 = () => {
    console.log('Probando funcion flecha')
}
saludar2();
// Funcion sumar
const sumar = (a, b) => a + b;
console.log(sumar(50, 10))


// Templates strings
const nombre2 = 'Agus'
const apellido2 = 'Sta'

const valor1 = 8;
const valor2=9;

const resultado = `El resultado de la operación del valor 1 más el valor 2 es igual a ${sumar(valor1, valor2)}`
console.log(resultado)

const nombreYapellido = nombre2 + ' ' + apellido2;
const nombreYapellido2 = `${nombre2} ${apellido2}`
console.log(nombreYapellido)
console.log(nombreYapellido2)


// Clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }

    static specie = 'humano';
    saludar = () => {
        console.log(`Hola, soy ${this.nombre}, gustazo pibe!`)
    }

    getEspecie = () => {
        console.log(`Aunque no lo creas, soy un terrible ${Persona.specie}, 10 puntos pibe!`)
    }
}

let persona1 = new Persona('Agustín')
let persona2 = new Persona('Bombita')

persona1.saludar()
persona2.saludar()
persona1.getEspecie()
persona2.getEspecie()



// Clase contador
class Contador {
    // atributos
    // contador debe iniciarse en 0
    static CONTADOR_GLOBAL = 0;

    // constructor
    constructor(responsable) {
        this.responsable = responsable;
        this.contadorResponsable = 0;
    }
   
    // metodos
    getResponsable = () => `El responsable del contador es ${this.responsable}, extraordinario!`
    contar = () => {
        this.contadorResponsable += 1
        Contador.CONTADOR_GLOBAL ++
    }
    getCuentaIndividual = () => this.contadorResponsable
    getCuentaGlobal = () => {
        return Contador.CONTADOR_GLOBAL;
    }
}


module.exports = Contador;
