// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

//     - What is the year today?
// var a = new Date().getFullYear();
// console.log(a);


//     - What is the month today as a number?
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const a = new Date();
// let name = month[a.getMonth()];
// console.log(name);
// console.log(a.getMonth());


//     - What is the date today?
// var a = new Date().getDate();
// console.log(a);


//     - What is the day today as a number?
// var dayName =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var day = dayName[new Date().getDay()];
// console.log(day);


//     - What is the hours now?
// var a = new Date().getHours();
// console.log(a);


//     - What is the minutes now?
// var a = new Date().getMinutes();
// console.log(a);


//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
var a = new Date();
var b = new Date(2023,02,13);
var c = b-a;
console.log(c/1000);




