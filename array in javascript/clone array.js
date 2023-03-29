//here i am talking about deep copy of an array
const originalArray = [1, 2, [3, 4]];
const newArray = JSON.parse(JSON.stringify(originalArray));
console.log(newArray); // [1, 2, [3, 4]]

const c=Array.from(originalArray);
console.log(c);