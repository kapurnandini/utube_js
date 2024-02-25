const score = 400
// console.log(score);
//returns a number value

const balance = new Number(100)
 console.log(balance);
//returns number as object

// console.log(balance.toString().length);
//converts numbers to string and tells length of the string

console.log(balance.toFixed(1));
//converts number to decimal till 1

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
//converts to precised value

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));
//en-in converts to indian number system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));

//to round off the no to higher no
// console.log(Math.ceil(4.2));

//to round off the number to lower no
// console.log(Math.floor(4.9));

// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //gives random value from 0 to 1
console.log((Math.random()*10) + 1); // shifts random value from (0 to 10) but +1 to give (1 to 10)
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +min )//starts value from 10(if we do +min)
