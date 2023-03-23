var values = [1,2,3,4,5];


//here previous value is 5 and current value is 4 and iteration start from last 2nd element

var sum = values.reduceRight(function(prevvalue, currentvalue, index, array)
{
    return (prevvalue + currentvalue);
});

console.log(sum);
console.log(sum instanceof Array);