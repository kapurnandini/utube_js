// singleton =>when we declare as literals it is not singleton but if formed from constructor then it is singleton
// Object.create =>constructor method

// object literals

//to access symbol using key 
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //cant access as JsUser.fullname ,use other method
    [mySym]: "mykey1",//important format, without [] it will be of type string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
//console.log(JsUser.fullname) => incorrect
console.log(JsUser["full name"])
console.log(JsUser[mySym])

//changing values

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //after freezing we cant change the declared value 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //backtick works as template literal
    //this. access keys of JsUser 
}

console.log(JsUser.greeting()); 
console.log(JsUser.greeting); // returns that function is anonymous 
console.log(JsUser.greetingTwo());