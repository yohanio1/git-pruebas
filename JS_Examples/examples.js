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
/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

 const sepCaracter = (cadena = " ",separador = " ") =>{

  if (cadena == " " && separador ==  " "){
    return null;
  }else if(typeof(cadena) === 'string'){
    return cadena.split(separador)
  }else{
    return undefined
  }
  
    
}

 /*
4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo',3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

const repet = (cadena,n) =>{

  for (let i = 0 ; i < n; i++){
      console.info(`${cadena}, ${i}`);
  }

}



//Exportación de Módulos

module.exports = {numCadena, recortar , sepCaracter, repet};