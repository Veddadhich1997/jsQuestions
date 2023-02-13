// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
var a = new Date().toLocaleString();
console.log(a);
// 13/2/2023, 8:09:20 pm

const dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth();
let date = dateObj.getDate();
let hour = dateObj.getHours();

let minute = dateObj.getMinutes();

let second = dateObj.getSeconds();

const time = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
console.log(time); 
// 2023-01-13 21:41:25