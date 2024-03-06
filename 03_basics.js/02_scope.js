//global scope
//var c = 300 
let a = 300

//{ } is basically scope
//inside if is=>local scope
if (true) {
    let a = 10
    const b = 20
    var c = 30 //var doesnt take care of global or local scope
    // console.log("INNER: ", a); //here o/p is 10
    
}


// we cant print a and b as it is declared inside if
//let and const should be used as local scope only
//  console.log(a);
//  console.log(b);
//  console.log(c);

// treat as icecream prob where small can take icecream from big
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);// cant access inner function var 

     //two() //executed line by line so two() executed before one()

}
one()

//next eg
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//error cs scope is finished
}

// console.log(username); //error cs scope is finished


// ++++++++++++++++++ interesting ++++++++++++++++++

//concept of hoisting

// console.log(addone(5)) //this function works

// function addone(num){
//     return num + 1
// }



// console.log(addTwo(5)) //doesnot work as function initialised with const
// const addTwo = function(num){
//     return num + 2
// }