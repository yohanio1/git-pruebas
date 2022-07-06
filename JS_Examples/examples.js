/*1)Programa una función que cuente el 
número de caracteres de una cadena de 
texto.
*/

const numCadena = (cadena = "") =>{
    return cadena.length;
  }
  


/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

const recortar = (cadena,numCaracteres) =>{
  if (typeof(cadena) === 'object'){
    return undefined;
  }else{
  return cadena.slice(0,numCaracteres);
  }
}


//Exportación de Módulos

module.exports = {numCadena, recortar};