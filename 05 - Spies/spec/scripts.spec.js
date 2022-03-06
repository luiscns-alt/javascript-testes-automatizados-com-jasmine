var isAnagram = require('../anagram');

class Calculador {
    sum(n1, n2) {
        return n1 + n2;
    }
}

// describe('Person', function () {
//     it('uses the Calculador to sum', function () {
//         var calculator = new Calculador();
//         var person = new Person();

//         spyOn(person, 'randomCalc');
//         person.randomCalc(calculator);
//         expect(person.randomCalc).toHaveBeenCalledWith(calculator);
//     });
// });

describe('Person', function () {
    var tape;

    beforeEach(function () {
        tape = jasmine.createSpyObj('tape', [
            'play',
            'pause',
            'stop',
            'rewind',
        ]);

        tape.play();
        tape.pause();
        tape.rewind(0);
    });

    it('uses the Calculator to divide', function () {
        var calculator = new Calculator();
        var person = new Person();

        person.randomDiv = jasmine.createSpy('div spy').and.returnValue(5);

        expect(person.randomDiv()).toEqual(5);
    });
});

class Person {
    randomCalc(calculator) {
        var n1 = parserInt(Math.random() * 10),
            n2 = parserInt(Math.random() * 10);
        return `${n1} + ${n2} = ${calculator.sum(n1, n2)}`;
    }
}
