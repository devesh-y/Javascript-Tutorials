function func1(hello)
{
    console.log(hello);
}
function func1(hel,hello)
{
    console.log(hel,hello);
    
}
func1("to");//here function overwriting takes place 
func1("from","to");

console.log("\n");
//for using concept like function overloading we have to use it like

var x=5;
function func2(arg1,arg2)
{
    if(arguments.length==1)
    {
        console.log(arg1);
        console.log("the value of x is ",x);              //it is applicable in javascript  you can use outer variables also in the function
    }
    if(arguments.length==2)
    {
        console.log(arg1,arg2);
    }
}
func2("to");
func2("to","ffd");