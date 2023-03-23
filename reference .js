var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name,"\n"); //"Nicholas"


function furu(hello)
{
    hello.name="devesh";
}
furu(obj1);
console.log(obj2.name,"\n");


function setName(obj) 
{
    obj.name = "Nicholas";
    obj = new Object(); //When obj is overwritten inside the function, it becomes a pointer to a local object. 
    obj.name = "Greg";   // That local object is destroyed as soon as the function finishes executing.
}
var person = new Object();
setName(person);
console.log(person.name); //"Nicholas"