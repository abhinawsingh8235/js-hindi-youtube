// Dates

let myDates = new Date()
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDates);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-23")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  //in milisecond
//console.log(Math.floor(Date.now()/1000)); // in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})











