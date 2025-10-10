// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 32145698741385n



// Reference (Non primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "hanuman"];
let myObj = {
    name : "abhinaw",
    age : 21,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof heros);
//https://262.ecma-international.org/5.1/#sec-11.4.3



//   +++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "abhinaw@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


