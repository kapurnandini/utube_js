const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//this is used to refer to current context
        //console.log(this); //see o/p for diff current contexts
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// returns empty but for browser returns a window

//eg 2:
//  function chai(){
//         let username = "hitesh"
//         console.log(this.username); //this works inside object only and not inside functions
//     }
    
//     chai()

//same eg diff declaration
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//arrow function // we cant access using this here also
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()
    
//ARROW FUNCTION =>explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//ARROW FUNCTION =>implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

//objects inside arrow function should be wrapped inside ()
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

