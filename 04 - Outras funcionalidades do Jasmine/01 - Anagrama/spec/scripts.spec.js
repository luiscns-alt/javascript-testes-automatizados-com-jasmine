var isAnagram = require('../scripts');

describe('Anagram', function () {
    var result = 2;
    afterEach(function () {
        result = 2;
    });
    it('has to result in 5', function () {
        result += 3;
        expect(result).toEqual(5);
    });
    it('has to result in 9', function () {
        result += 7;
        expect(result).toEqual(9);
    });
});
describe('Anagram', function () {
    describe('Letters', function () {
        it('is true when "abc" and "cba"', function () {
            expect(isAnagram('abc', 'cba')).toEqual(true);
        });
        it('is true when "Amor" and "Roma"', function () {
            expect(isAnagram('Amor', 'Roma')).toEqual(true);
        });
        it('is true when two empty strings', function () {
            expect(isAnagram('', '')).toEqual(true);
        });
    });
    describe('Numbers', function () {
        it('is true when "132" and 312', function () {
            expect(isAnagram('132', 312)).toEqual(true);
        });
        it('is true when "0.12" and "102"', function () {
            expect(isAnagram('0.12', '102')).toEqual(true);
        });
        it('is true when 0.12 and "102"', function () {
            expect(isAnagram(0.12, '102')).toEqual(true);
        });
        it('is false when 012 and 102', function () {
            expect(isAnagram(012, 102)).toEqual(false);
        });
    });
});
describe('letters', function () {
    xit('is true when "abc" and "cba"', function () {
        expect(isAnagram('abc', 'cba')).toEqual(true);
    });
});

xdescribe('letters', function () {
    it('is true when "abc" and "cba"', function () {
        expect(isAnagram('abc', 'cba')).toEqual(true);
    });
});

describe('letters', function () {
    it('is true when "abc" and "cba"', function () {
        expect(isAnagram('abc', 'cba')).toEqual(true);
    });
    return; // A funcao "describe()" sera interrompida aqui.

    it('is true when "Amor" and "Roma"', function () {
        expect(isAnagram('Amor', 'Roma')).toEqual(true);
    });
    it('is true when two empty strings', function () {
        expect(isAnagram('', '')).toEqual(true);
    });
});
