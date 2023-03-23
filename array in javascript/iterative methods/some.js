//similar to the every method

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.some(function(item, index, array)//here 2 and 3rd argument are default values ,you can remove it if you dont want to use them
{
    return item>=2;
});

//if the function is true for some elements then it will return true otherwise false
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
console.log(ages.some(checkAge));


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

let result = survey.some(isSameAnswer);


console.log(result);