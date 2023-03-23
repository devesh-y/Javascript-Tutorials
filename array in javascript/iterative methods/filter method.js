//Runs the given function on every item in the array and returns an array of all
//items for which the function returns true.
var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult = numbers.filter(function(item, index, array)
{
    return (item > 2);
});
console.log(filterResult);