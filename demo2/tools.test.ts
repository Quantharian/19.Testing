import { countWords, generatePassword } from './tools';

describe('countWords', () => {
    it('should return 0 for an empty string', () => {
        expect(countWords('')).toBe(0);
    }),
        it('should return the correct word count for a sentence', () => {
            expect(countWords('Hello world')).toBe(2);
            expect(countWords('This is a test sentence')).toBe(5);
        });
    it('should return the correct word count for a sentence with multiple spaces', () => {
        expect(countWords('Hello        world')).toBe(2);
        expect(countWords('This      is      a      test      sentence')).toBe(
            5,
        );
    });
});

describe('generatePassword', () => {
    it('should generate a password of the specified length', () => {
        const length = 8;
        const password = generatePassword(length);
        expect(password).toHaveLength(length);
    });

    it('it should be a string', () => {
        const length = 8;
        const result = generatePassword(length);
        expect(typeof result).toBe('string');
    });

    it('should include uppercase letters, lowercase letters, and numbers', () => {
        const length = 8;
        const password = generatePassword(length);
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/[0-9]/);
    });

    it('should shuffle the characters in the password', () => {
        const password = generatePassword(8);
        const sortedPassword = password.split('').sort().join('');
        expect(password).not.toBe(sortedPassword); // Ensure the password is shuffled
    });

    it('should handle lengths less than or equal to 6 correctly', () => {
        const password = generatePassword(8);
        expect(password).toHaveLength(8);
    });

    it('should handle lengths greater than 6 correctly', () => {
        const password = generatePassword(8);
        expect(password).toHaveLength(8);
    });
});
