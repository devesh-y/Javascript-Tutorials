console.log(new Date());
console.log(Date());
console.log(new Date().getFullYear());
console.log(new Date().getMonth()); //it is 0 to 11
console.log(new Date().getDate());
console.log(new Date().getDay());//0 to 6 sunday to saturday
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
console.log(new Date().getTime());//milliseconds since january 1 1970 gmt
console.log(new Date().getTimezoneOffset());//Returns the number of minutes that the local time zone is off set from UTC.


console.log("\n"+Date.now());//important

console.log(new  Date().toString());
console.log(new Date().toLocaleString());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());
console.log(new Date().toGMTString());