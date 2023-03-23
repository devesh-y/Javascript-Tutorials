//there is no return value in this function 
//you can change the value of the array elements using this method
const numbers = [65, 44, 12, 4];
function myFunction(item, index, arr) {
    arr[index] = item * 10;
}    
numbers.forEach(myFunction);
console.log(numbers);  //it changes the array elements
