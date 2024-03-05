const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) => adds other array as element of marvel_heroes at index 3

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); => not feasible

// const allHeros = marvel_heros.concat(dc_heros) => removes problem of push 
// console.log(allHeros);

//const all_new_heros = [...marvel_heros, ...dc_heros] => spreads out all elements of array (alternative for concat)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //we use infinity as depth to resolve array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //checks if it is an array
console.log(Array.from("Hitesh")) //converts to an array
console.log(Array.from({name: "hitesh"})) // interesting (cant convert to array returns empty array cs doesnt know if key needs to be converteed or value)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //joins everything in array
