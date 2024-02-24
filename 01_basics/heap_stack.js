//stack (Primitive) -we get a copy of data stored in stack
let myname = "NandiniKapoor"
let another_name = myname
another_name = "chaiaurcode"
console.log(myname)
console.log(another_name)

//heap()non-primitive-we point to the reference value- we update everything in the org value
let user = {
    email:"nn921@gmail.com"
    upi: "92800"
}
let usertwo = userone
usertwo.email = "bfse@gmail.com"

console.log(user)
console.log(usertwo)