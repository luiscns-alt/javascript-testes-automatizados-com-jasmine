var isAnagram = require('../main');

var myValue = 0;
function myAsyncFunc() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            myValue = 10;
            resolve(myValue);
        }, 2000);
    });
    return promise;
}

describe('Async Function', function () {
    beforeEach(function (done) {
        myAsyncFunc().then(done);
    });

    it('should be 10', function () {
        expect(myValue).toEqual(10);
    });
});
