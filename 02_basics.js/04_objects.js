// const tinderUser = new Object() => singleton object
//const tinderUser = {}  =>non -singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //creates obj2 as element in obj1
// const obj3 = Object.assign({}, obj1, obj2, obj4) //good way

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //creates array in array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks if it has that property


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// course.courseInstructor

//object destructuring => to access objects values easily without using above old method
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//JSON Api => keys and values both should be string
 
//1.

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//2.

[
    {},
    {},
    {}
]