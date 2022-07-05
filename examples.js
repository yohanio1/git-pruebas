/*1)Programa una función que cuente el 
número de caracteres de una cadena de 
texto.
*/

/*function numCaracteres(cadena){

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
}*/

const numCaracteres = (cadena) => {
    switch(typeof(cadena)){
        case 'string': 
            console.log(`tu cadena es: ${cadena} y tiene ${cadena.length} caracteres`);
            break;
        case 'number':
            console.log("Se convierte el número");
            let new_cadena = cadena.toString()
            console.log(`tu cadena es: ${new_cadena} y tiene ${new_cadena.length} caracteres`);
            break;
        default:
            console.error(`Error el tipo de dato debe ser string y tu tipo de dato es ${typeof(cadena)}`);
    }
}

