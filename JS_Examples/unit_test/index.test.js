const excercise = require('../examples');
//const recortar = require('../examples');


describe('excercise #1',() =>{

  test('cadena Hola length =  4', () => {
    expect(excercise.numCadena("Hola")).toBe(4);
  });
  test('number is undefined',() =>{
    expect(excercise.numCadena(12)).toBeUndefined();
  });
  test('object is undefined',() =>{
    let objectTest = {
      nombre: "Juan",
      edad: 12
    };
    expect(excercise.numCadena(objectTest)).toBeUndefined();
  });
})

describe('excercise #2',() =>{

  test('slice = 4 Hola Mundo => result Hola ', () => {
    expect(excercise.recortar("Hola Mundo",4)).toBe("Hola");
  });
  test('slice = 3 Esto es una prueba => result Est ', () => {
    expect(excercise.recortar("Esto es una prueba",3)).toBe("Est");
  });
  test('slice = n empty string => result empty string ', () => {
    expect(excercise.recortar("",3)).toBe("");
  });
  test('slice = n object => result undefined ', () => {
    let objectTest = {
      nombre: "Juan",
      edad: 12
    };
    expect(excercise.recortar(objectTest,3)).toBeUndefined();
  });
})
