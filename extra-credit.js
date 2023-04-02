/* 

Current Year
Create an Arithmetic Expression that uses three mathematical operators (+,-,/,*) that returns the date of the current year.

EX: 2000 + 18 - 2 * 1;

*/

// YOUR CODE BELOW
var currentYear = 2000 + (26 -3) * 1;
console.log(currentYear)

/*
My Age
Create an Arithmetic Expression that uses four mathematical operators (+,-,/,*) that returns your current age.

EX: (9+1)*6/2-1;
*/
// YOUR CODE BELOW
var myAge = (1 * (20 + 40)) / 2 - 2;
console.log (myAge)

/*
To Uppercase
Create a String by surrounding characters with an apostrophe or quotation marks. Call the toUpperCase() method on the string.

EX: "apples".toUpperCase() OUTPUT: "APPLES"
*/

// YOUR CODE BELOW
let nameFirst = "Amber"
console.log(nameFirst.toUpperCase())

/*
To Lowercase
Create a String by surrounding characters with an apostrophe or quotation marks. Call the toLowerCase() method on the string.

EX: "FULLSTACK ACADEMY".toLowerCase() OUTPUT: "fullstack academy";
*/

// YOUR CODE BELOW
let nameLast = "Ramsey"
console.log(nameLast.toLowerCase())

// YOUR CODE BELOW

let favoriteActivity = "coding"

describe('favoriteActivity', function() {

  it('should be coding', function() {
    expect(favoriteActivity).toEqual('coding');
  });

});

// YOUR CODE BELOW
let myFirstName = "Amber";
let myFavoriteNum = 28;
let havingFun = true;

describe('myFirstName', function() {

  it('should be a string value', function() {
    expect(typeof myFirstName).toEqual('string');
  });

});

describe('myFavoriteNum', function() {

  it('should be a number value', function() {
    expect(typeof myFavoriteNum).toEqual('number');
  });

});

describe('havingFun', function() {

  it('should be a boolean value', function() {
    expect(typeof havingFun).toEqual('boolean');
  });

});


let num1 = 854;
let num2 = 385;
let num3 = 779;

// YOUR CODE BELOW

let myFirstSum = num1 + num2 + num3

describe("myFirstSum", function() {

  it("should be a number", function() {
    expect(typeof myFirstSum).toEqual('number');
  });

  it("should be equal to 2018", function () {
  	expect(myFirstSum).toEqual(2018);
  });

});

// YOUR CODE BELOW

let myGuess = 400

//Expression: 20 * (50 / (5 * 2) + 15)
describe("myGuess", function() {

  it("should be a number", function() {
    expect(typeof myGuess).toEqual('number');
  });

  it("should be the right value", function() {
    expect(myGuess).toEqual(400);
  });

  let happyNum = 1000;

// YOUR CODE BELOW

happyNum = 1000 / 100;
happyNum = 10 - 7;
happyNum = 3 + 2;

describe("happyNum", function() {

  it("should be equal to 5", function() {
    expect(happyNum).toEqual(5);
  });

});


let name = 'David';
// let name = 'Nimit';
// let name = 'Someone else';

let found;

// YOUR CODE BELOW

if (name === "David") {
  found = true;
}
else if (name === "Nimit") {
  found = true;
}
else if(name === "Someone Else") {
  found = false;
}

describe('found', () => {

  it('is of type boolean', () => {
    expect(typeof found).toEqual('boolean');
  })

  it('is true only if name is David or Nimit', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let foundValues = {
      'David': true,
      'Nimit': true,
      'Someone else': false
    }

    expect(found).toEqual(foundValues[name]);
  });

});

let word = 'carrots';
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';


let lastWord;

// YOUR CODE BELOW

if (word.charAt(0) === 'p' && word.length === 7) {
  lastWord = word.toUpperCase();}
else {lastWord=word;}

describe('lastWord', () => {

  it('should be of type string', () => {
    expect(typeof lastWord).toEqual('string');
  });


  it('should be uppercased if word starts with p and has length of 7', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let lastWordValues = {
      'carrots': 'carrots',
      'pacific': 'PACIFIC',
      'perfecto': 'perfecto',
      'perfect': 'PERFECT'
    }

    expect(lastWord).toEqual(lastWordValues[word]);
  });

});})

let boolean1 = true, boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

// YOUR CODE BELOW

if (boolean1 === true && boolean2 === true){
  result = "both";}
 else if (boolean1 === true || boolean2 ===true){
   result = "one";}
else if (boolean1 !== true && boolean2 !== true){
  result = "none";
}
describe('result', () => {

  it('should be of type string', () => {
    expect(typeof result).toEqual('string');
  });


  it('should be both, one, or none depending on the boolean1 and boolean2 values', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let resultValues = {
      'truetrue': 'both',
      'truefalse': 'one',
      'falsetrue': 'one',
      'falsefalse': 'none'
    }

    expect(result).toEqual(resultValues[String(boolean1) + String(boolean2)]);
  });

});

// YOUR CODE BELOW
function simpleSum (num1, num2){
  return num1 +num2}


describe('simpleSum', () => {

  it('is a function', () => {
    expect(typeof simpleSum).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = simpleSum(1, 2);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of two positive numbers', () => {
    let returnedValue = simpleSum(1, 2);
    expect(returnedValue).toEqual(3);
  });

  it('returns the sum of two negative numbers', () => {
    let returnedValue = simpleSum(-10, -20);
    expect(returnedValue).toEqual(-30);
  });

});


// YOUR CODE BELOW
function defaultGreet (first, last) {
  if(last){
    return "Hi" + " "+ first + " " + last + "!"
  }
  else {
    return "Hi" + " " + first + " " + "Doe" + "!" 
  }
}

describe('defaultGreet', () => {

  it('is a function', () => {
    expect(typeof defaultGreet).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = defaultGreet('Natalie', 'Cole');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct greeting if the first and last name is defined', () => {
    let returnedValue = defaultGreet('Natalie', 'Cole');
    expect(returnedValue).toEqual('Hi Natalie Cole!');
  });

  it('returns the correct greeting if the last name is undefined', () => {
    let returnedValue = defaultGreet('Jane');
    expect(returnedValue).toEqual('Hi Jane Doe!');
  });

});

// YOUR CODE BELOW
function taxCalculator(price, state){
  if(state === "NY"){
    return price * 1.04}
  else if (state === "NJ"){
    return price * 1.06625}
  else {return price}
}

describe('taxCalculator', () => {

  it('is a function', () => {
    expect(typeof taxCalculator).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = taxCalculator(100, 'NY');
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the correct price for NY', () => {
    let returnedValue = taxCalculator(50, 'NY');
    expect(returnedValue).toEqual(52);
  });

  it('returns the correct price for NJ', () => {
    let returnedValue = taxCalculator(10, 'NJ');
    expect(returnedValue).toEqual(10.6625);
  });

});

// YOUR CODE BELOW

function myMnemonic (string1, string2, string3, string4){
  let mnemonic = "";
  if(string1){mnemonic +=string1[0];
  }
  if(string2){mnemonic += string2[0];
  }
  if(string3){mnemonic += string3[0];
  }
  if(string4){mnemonic += string4[0];
  }
  return mnemonic;
}
describe('myMnemonic', () => {

  it('is a function', () => {
    expect(typeof myMnemonic).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = myMnemonic('');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a mnemonic if all four strings are defined', () => {
    let returnedValue = myMnemonic('Frankly', 'Umbrellas', 'Love', 'Leather');
    expect(returnedValue).toEqual('FULL');
  });

  it('returns a mnemonic if only three string are defined', () => {
    let returnedValue = myMnemonic('Super', 'Tacos', 'Apples');
    expect(returnedValue).toEqual('STA');
  });

  it('returns a mnemonic if only two string are defined', () => {
    let returnedValue = myMnemonic('Candy', 'Kringles');
    expect(returnedValue).toEqual('CK');
  });

});

// YOUR CODE BELOW

function greeting(name){
if(name){
  return "Hello" + " " + name + "!"}
  else {return "Hello!"}
}

describe('greeting', () => {

  it('is a function', () => {
    expect(typeof greeting).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = greeting();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a personalized greeting, given a name', () => {
    let returnedValue = greeting('Layla');
    expect(returnedValue).toEqual('Hello Layla!');
  });

  it('returns an anonymous greeting if no name is provided', () => {
    let returnedValue = greeting();
    expect(returnedValue).toEqual('Hello!');
  });

});

// YOUR CODE BELOW

function doYouPlayTheTheremin (name){
  if (name[0] === "S" || name[0] === "s"){
    return true}
  else {return false;}
}

describe('doYouPlayTheTheremin', () => {

  it('is a function', () => {
    expect(typeof doYouPlayTheTheremin).toEqual('function');
  });

  it('returns an boolean', () => {
    let returnedValue = doYouPlayTheTheremin('Mark');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if the first letter of the name starts with s', () => {
    let returnedValue = doYouPlayTheTheremin('sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns true if the first letter of the name starts with S', () => {
    let returnedValue = doYouPlayTheTheremin('Sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns false given any other input', () => {
    let returnedValue = doYouPlayTheTheremin('Frank');
    expect(returnedValue).toEqual(false);
  });

});

// YOUR CODE BELOW

function lastCharacter(str1, str2){
  if (str1[str1.length-1] === str2[str2.length-1]){
    return true;
  }
  else {return false}
}
describe('lastCharacter', () => {

  it('is a function', () => {
    expect(typeof lastCharacter).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = lastCharacter('happy string1', 'happy string2');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if both strings end with the same character', () => {
    let returnedValue = lastCharacter('funiful', 'wonderful');
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the strings end with different characters', () => {
    let returnedValue = lastCharacter('happy', 'sad');
    expect(returnedValue).toEqual(false);
  });

});

// YOUR CODE BELOW

function maxOfThree(num1, num2, num3){
  if (num1 > num2 && num1 > num3){
    return num1;
  }
   else if (num2 > num1 && num2 > num3){
     return num2;
   }
  else {return num3}
}
describe('maxOfThree', () => {

  it('is a function', () => {
    expect(typeof maxOfThree).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = maxOfThree(1, 2, 3);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the first number if it is the largest', () => {
    let returnedValue = maxOfThree(10, 8, 6);
    expect(returnedValue).toEqual(10);
  });

  it('returns the second number if it is the largest', () => {
    let returnedValue = maxOfThree(20, 40, 10);
    expect(returnedValue).toEqual(40);
  });

  it('returns the third number if it is the largest', () => {
    let returnedValue = maxOfThree(3, 6, 9);
    expect(returnedValue).toEqual(9);
  });

});

// YOUR CODE BELOW

function everyWhichWay (num1, num2, result){
  if (num1 + num2 === result){
    return "sum";
  }
  else if (num1 - num2 === result){
    return "difference";
  }
  else if (num1 * num2 ===result){
    return "product";
  }
  else if (num1 / num2 ===result){
    return "fraction";
  }
  else {return null}
}

describe('everyWhichWay', () => {

  it('is a function', () => {
    expect(typeof everyWhichWay).toEqual('function');
  });

  it('returns "sum" if the sum of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(1, 2, 3);
    expect(returnedValue).toEqual('sum');
  });

  it('return "difference" if the first number minus the second equals the third', () => {
    let returnedValue = everyWhichWay(10, 9, 1);
    expect(returnedValue).toEqual('difference');
  });

  it('returns "product" if the product of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(10, 5, 50);
    expect(returnedValue).toEqual('product');
  });

  it('returns "fraction" if the first number divided by the second equals the third', () => {
    let returnedValue = everyWhichWay(30, 3, 10);
    expect(returnedValue).toEqual('fraction');
  });

  it('returns if none of the other conditions are true', () => {
    let returnedValue = everyWhichWay(124, 2345, 1);
    expect(returnedValue).toEqual(null);
  });

});