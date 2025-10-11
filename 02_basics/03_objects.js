// singleton
// object.create  // constructor object

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "abhinaw",
    "full name": "abhinaw singh",
    [mySym]: "myKey1",
    age: 18, 
    location: "jaipur",
    email: "abhinaw8235@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abhinaw@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abhinaw@microsoft.com"
// console.log(JsUser);

JsUser.gretting = function(){
    console.log("Hello JS user");  
}
JsUser.grettingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  
}

console.log(JsUser.gretting());
console.log(JsUser.grettingTwo());







