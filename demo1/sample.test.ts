import { add } from './sample';

//Test elements
//describe: agrupa los test
//it: test unitario
//test: test unitario
//expect: resultado esperado
//toBe: comparador

describe('add function', () => {
    it('should add two positive numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('should add two negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    it('should add a positive and a negative number', () => {
        expect(add(1, -2)).toBe(-1);
    });

    it('should add zero and a number', () => {
        expect(add(0, 5)).toBe(5);
    });

    it('should add two zeros', () => {
        expect(add(0, 0)).toBe(0);
    });
});

test('Si sumo 2 y 3 da 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('Si sumo -2 y -3 da -5', () => {
    expect(add(-2, -3)).toBe(-5);
});
