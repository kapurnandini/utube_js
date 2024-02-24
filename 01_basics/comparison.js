//simple operators
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//
// console.log("2" > 1); JavaScript will attempt to convert the string to a number. =>true
// console.log("02" > 1); JavaScript will attempt to convert the string to a number. =>true

//confusing comparisons
console.log(null > 0); //false cs null is NaN
console.log(null == 0); // false cs null is NaN
console.log(null >= 0); // true cs it converts null to a number

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===  => checks the number as well as datatype 

console.log("2" === 2);