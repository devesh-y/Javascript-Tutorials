let a, x, y;
const r = 10;
//The with statement sets the scope of the code within a particular object.
//The with statement was created as a convenience for times when a single object was being coded to
//over and over again, such as in this example:


with (Math) {
    a = PI * r * r;             //here we know   Math.PI is used to detect pi but here we use "with" statement 
    x = r * cos(PI);
    y = r * sin(PI / 2);
}
console.log(a,x,y);

//This means that each variable inside the statement is first considered to be a local variable. If it’s not found to be a local variable, the math
//object is searched to see if it has a property of the same name. If so, then the variable is evaluated as a property of math.