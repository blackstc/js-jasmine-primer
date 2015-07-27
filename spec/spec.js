var code = require('../main.js');

describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(0.1);
    expect(code.calculate(10)).toEqual(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).toEqual(1.35);
  });

  it('should tax 5% on the third $10', function() {
    expect(code.calculate(30)).toEqual(2.2);
  });

  it('should tax 3% for rest of amount over $30', function() {
    expect(code.calculate(40)).toEqual(2.5);
  });

});

describe('Leap Year Finder', function() {

  it('number divisible by four is a leap year', function() {
    expect(code.leapYear(4)).toBe(true);
    expect(code.leapYear(500)).toBe(false);
    expect(code.leapYear(2000)).toBe(true);
    expect(code.leapYear(2015)).toBe(false);
  });

});

describe('Change to Upper Case', function() {

  it('capitalized the strings in the array', function() {
    expect(code.changeToUpper(['red', 'green', 'blue'])).toEqual(['RED', 'GREEN', 'BLUE']);
  });
});

describe('Greatest Strength', function () {

  it('return object with the largest key strength', function() {
    expect(code.findGreatestStrength([{strength: 20, name: 'A'}, {strength: 10, name: 'B'}])).toEqual({strength: 20, name: 'A'});
  });
});
