
//the iteration starts from the 2nd element so current value is 2 and prevvalue is 1
var values = [1,2,3,4,5];

//here previous value is the value of sum and current value is the value of element in the array
var sum = values.reduce(function(prevvalue, currentvalue, index, array)
{
    return (prevvalue + currentvalue);
});

console.log(sum);
console.log(sum instanceof Array);
