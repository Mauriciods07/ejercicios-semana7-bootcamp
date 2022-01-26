/* 
    Importar los módulos 
    si sale una importación extra, hay que borrarla 
    se debe encerrar la función entre llaves
*/
const { sumar, restar, multiplicar, dividir } = require('./calculadora');

/* Esto sólo es una descripción, si encuentra errores, no te dice dónde está */
describe('Pruebas en el componente calculadora', () => {
    /* Hacer una prueba */
    test('Prueba en la función sumar', () => {
        /* resultado esperado */
        expect(sumar(3, 5)).toBe(8);
    });

    test('Prueba en la función restar', () => {
        expect(restar(5, 3)).toBe(2);
    });

    test('Prueba en la función multiplicar', () => {
        expect(multiplicar(5, 3)).toBe(15);
    });

    test('Prueba en la función dividir', () => {
        expect(dividir(6, 3)).toBe(2);
    });

})

/* 
    se corre con 
    npm run test
*/