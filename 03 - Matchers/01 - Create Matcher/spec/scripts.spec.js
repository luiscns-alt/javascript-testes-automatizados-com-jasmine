var isAnagram = require("../scripts");

describe("Anagram", function () {
  var myMatchers = {
    toBe2: function (util, customEqualityTesters) {
      return {
        compare: function (actual, expected) {
          var result = {};
          result.pass = actual === 2;

          if (!result.pass) {
            result.message = "Expected " + actual + " to be exactly 2";
          }

          return result;
        },
      };
    },
  };

  beforeEach(function () {
    jasmine.addMatchers(myMatchers);
  });

  it("is 2", function () {
    expect(2).toBe2();
  });
});
