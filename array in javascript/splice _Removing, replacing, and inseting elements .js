//format 
//array.splice(start, elementsToDelete, value1, value2, ...)

//it changes the actual array also


//deletion
var hello = [3, 5, 1, 6, 2, 4];
var arr=hello.splice(0,3);//delete the elements and store in arr      if only splice(0)  then from 0 index all elements will be deleted
console.log(hello);
console.log(arr);
console.log("\n");

//replacement
hello = [3, 5, 1, 6, 2, 4];
arr=hello.splice(0,2,5,7);       //first argument is initial index second is numeber of indexes third and fourth will be the value of replaced values
console.log(hello); 
console.log(arr);

//insertion
console.log("\n");
hello = [3, 5, 1, 6, 2, 4];
arr=hello.splice(0,0,5,7); //first argument is initial index second argument is known as elements to delete and here in case of insertion it is zero
console.log(hello);
console.log(arr);//there is no value stored in arr 
