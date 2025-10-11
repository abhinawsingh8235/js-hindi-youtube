//const tinderUser = new Object()  // singleton object
const tinderUser = {}             // non-singelton Object

tinderUser.id = "123BC"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "abhinaw",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);



const user =  [
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

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//  ++++++++++++ Object destructing +++++++++++++++

const course = {
    coursename: "js in hindi", 
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor); 
console.log(instructor);




// const navbar = () => {
//              // object dectructring in react
// }
// navbar(company = "hitesh")


// // API in JSON format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// // API in Arrays format
// [
//     {},
//     {},
//     {}
// ]


