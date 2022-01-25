/* 
    Importar los módulos 
    si sale una importación extra, hay que borrarla 
    se debe encerrar la función entre llaves
*/
const { sumar } = require('./calculadora');

/* Esto sólo es una descripción, si encuentra errores, no te dice dónde está */
describe('Pruebas en el componente calculadora', () => {
    /* Hacer una prueba */
    test('Prueba en la función sumar', () => {
        /* resultado esperado */
        expect(sumar(3, 5)).toBe(8);
    });
})

/* 
    se corre con 
    npm run test
*/