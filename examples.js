/*1)Programa una función que cuente el 
número de caracteres de una cadena de 
texto.
*/

function numCaracteres(cadena){

    switch(typeof(cadena)){
        case 'string': 
            console.log(cadena.length);
            break;
        case 'number':
            console.log("Se convierte el número");
            console.log(cadena.toString().length);
            break;
        default:
            console.error(`Error el tipo de dato debe ser string y tu tipo de dato es ${typeof(cadena)}`);
    }
}

const Persona = {
    nombre: "Juan",
    edad: 12
};

let a = 23;

numCaracteres(Persona);