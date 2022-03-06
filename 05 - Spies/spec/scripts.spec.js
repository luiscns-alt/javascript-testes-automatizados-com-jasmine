var isAnagram = require('../anagram');

class Calculador {
    sum(n1, n2) {
        return n1 + n2;
    }
}

describe('Person', function () {
    it('uses the Calculador to sum', function () {
        var calculator = new Calculador();
        var person = new Person();

        spyOn(person, 'randomCalc');
        person.randomCalc(calculator);
        expect(person.randomCalc).toHaveBeenCalledWith(calculator);
    });
});

class Person {
    randomCalc(calculator) {
        var n1 = parserInt(Math.random() * 10),
            n2 = parserInt(Math.random() * 10);
        return `${n1} + ${n2} = ${calculator.sum(n1, n2)}`;
    }
}
