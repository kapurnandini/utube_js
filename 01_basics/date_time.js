let datee = new Date()
console.log(datee)
console.log(datee.toDateString())
console.log(datee.toString())
console.log(datee.toLocaleDateString())
console.log(datee.toLocaleTimeString())

// console.log(typeof myDate);=>object

// let myCreatedDate = new Date(2023, 0, 23) => to create ur own date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) => 5 &3 for hours &minutes(month starts from 0)
// let myCreatedDate = new Date("2023-01-14") => here month starts from 1
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


