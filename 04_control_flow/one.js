// if
const isUserloggedIn = true
const temperature = 41

if(2 ==="2"){
    console.log("executed")
}

//basic if else blocks
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==(==) The strict inequality ( !== ) operator checks whether its two operands are not equal, returning a Boolean result.)

// const score = 200

// if (score > 100) {
//     let power = "fly" //gives error because scope of power doesnt extend outside
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

//implicit scope => not a good practice
// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

//basic if- else ladder
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

//logical and or
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}