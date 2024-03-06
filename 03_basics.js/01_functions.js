function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() => function calling

//below code gives o/p as undefined cs console is only printing and not returning anything
//  function addTwoNumbers(number1, number2){

//      console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

//correction of above code:
// function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return number1 + number2
//     console.log(number) // we cant print anything after returning
   
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);



function loginUserMessage(username){
    if( username === undefined){
        console.log("PLease enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("")) //returns nothing
console.log(loginUserMessage()) //returns undefined

//other method same code as above (!username ==undefined)
function loginUserMessage(username = "sam"){
    if(!username){ 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("hitesh"))

////rest and spread operator (...)
function calcart(...num1){
    return num1
} 
console.log(calcart(200,300,400,500,600)) //returns as an array


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
 
// console.log(calculateCartPrice(200, 400, 500, 2000)) //return only 500 and 2000

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));