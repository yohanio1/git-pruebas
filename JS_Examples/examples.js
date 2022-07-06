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


// 5) Programa una función que invierta las palabras de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const inverse = (cadena = null) =>{

  if (typeof(cadena) === 'string'){
    return cadena.split("").reverse().join("");
  }else if(cadena == null){
    return null
  }else{
    return undefined
  }
}

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// 7) Programa una función que valide si una palabra o frase dada,
//  es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//  pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

//Exportación de Módulos

module.exports = {numCadena, recortar , sepCaracter, inverse};