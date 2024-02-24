//1.converting to number
let score = "hitesh"

//Ways to display datatype
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)

//Converts string/null/boolean/undefined to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
//null =>0\
//undefined =>NaN(Not a Number)


//2.converting to boolean

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//3.converting to string
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
//converts into string o/p as 33

//*********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);=> power
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); =>o/p = 12
// console.log(1 + "2"); =>o/p = 12
// console.log("1" + 2 + 2); =>o/p = 122
// console.log(1 + 2 + "2"); =>o/p = 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

//not readable
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

//postfix and prefix
let gameCounter = 100
y = ++gameCounter;
z= gameCounter++;
console.log(gameCounter);
console.log(z)
console.log(y)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion