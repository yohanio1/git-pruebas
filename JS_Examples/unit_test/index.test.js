const numCadena = require('../examples');

describe('cadenas test',() =>{

  test('cadena Hola length =  4', () => {
    expect(numCadena("Hola")).toBe(4);
  });
  test('number is undefined',() =>{
    expect(numCadena(12)).toBeUndefined();
  });

})
