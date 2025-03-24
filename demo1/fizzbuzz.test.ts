// #Fizz Buzz

import { fizzbuzzItem, fizzbuzz } from './fizzbuzz';

// Las variables start y end se dan
//Devuelve un array con el contenido de los numeros individuales
//Reemplaza los multiplos de 3 por "Fizz"
//Reemplaza los multiplos de 5 por "Buzz"
//Reemplaza los multiplos de 3 y 5 por "FizzBuzz"

//Ejemplo: fizzBuzz(2,6) => [2, "Fizz", 4, "Buzz", "Fizz"]
//Ejemplo: fizzBuzz(12,16) => ["Fizz", 13, 14, "FizzBuzz"]

describe('FizzBuzz one item', () => {
    test('si la entrada es 2, la salida es [2]', () => {
        expect(fizzbuzzItem(2)).toEqual([2]);
    });

    test('si la entrada es 3, la salida es ["fizz"]', () => {
        expect(fizzbuzzItem(3)).toEqual(['fizz']);
    });

    test('si la entrada es 5, la salida es ["buzz"]', () => {
        expect(fizzbuzzItem(5)).toEqual(['buzz']);
    });

    test('si la entrada es 15, la salida es ["fizzbuzz"]', () => {
        expect(fizzbuzzItem(15)).toEqual(['fizzbuzz']);
    });

    test('si la entrada es 10, la salida es ["buzz"]', () => {
        expect(fizzbuzzItem(10)).toEqual(['buzz']);
    });

    test('si la entrada es 6, la salida es ["fizz"]', () => {
        expect(fizzbuzzItem(6)).toEqual(['fizz']);
    });

    test('si la entrada es 30, la salida es ["fizzbuzz"]', () => {
        expect(fizzbuzzItem(30)).toEqual(['fizzbuzz']);
    });
});


describe('FizzBuzz list', (1,15) => {
    test('si la entrada es 1 y 2, la salida es [')
    expect(fizzbuzz(1,15).toEqual([1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz"]))
})