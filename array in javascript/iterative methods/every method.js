var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array)//here 2 and 3rd argument are default values ,you can remove it if you dont want to use them
{
    return item>=1;
});
//its return type is a boolean value
//if the function is true for all elements then it will return true or if it is false for one element then it returns false
console.log(everyResult);


const ages = [32, 33, 16, 40];

function checkAge(age) 
{
    if(age==33)
    {
        return false;
    }
    else
    {
        return age > 15;
    }
    
}
console.log(ages.every(checkAge));


const survey =[
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}  ];
  
function isSameAnswer(el, index, arr) 
{
    if (index === 0) 
    {
        return true;
    } 
    else 
    {
        return (el.answer === arr[index - 1].answer);
    }
}

let result = survey.every(isSameAnswer);


console.log(result);