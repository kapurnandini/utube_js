// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6) => adds element at last
// myArr.push(7)
// myArr.pop() => removes element from last

// myArr.unshift(9) =>adds element at start
// myArr.shift() =>removes element from start

// console.log(myArr.includes(9)); //tells if 9 is there or not
// console.log(myArr.indexOf(9)); // returns -1

// const newArr = myArr.join() => newArr is string form

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //doesnt change original array and prints index(1,2)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //changes original array by removing spliced part and prints index(1,2,3)
console.log(myn2);