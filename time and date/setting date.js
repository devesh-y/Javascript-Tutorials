var userYear = 2018;
var userMonth = 11;   //from 0 to 11
var userDay = 31;

// Make a date object then use the data to change the date

var userDate = new Date();
userDate.setFullYear(userYear);
userDate.setMonth(userMonth);
userDate.setDate(userDay);
userDate.setHours(13);
userDate.setMinutes(45);
userDate.setSeconds(44);
userDate.setMilliseconds(455);
//userDate.setTime(43545353453);        milliseconds
console.log(userDate.toLocaleString(),"\n");

console.log(userDate.getFullYear());
console.log(userDate.getMonth());
console.log(userDate.getDate());
