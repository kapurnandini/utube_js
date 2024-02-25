const name = "hitesh"
const repoCount = 50
//old method
//console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//represents string as objects(key-value pairs)
const gameName = new String('hitesh-hc-com')
//console.log(gameName[0]);
//to tell it is a object
//console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-12,-1)
console.log(anotherString);

const newStringOne = "   hitesh    "
//console.log(newStringOne.trim());//to remove space

//const url = "https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-'))

//console.log(url.includes('sundar'))

//console.log(gameName.split('-'));