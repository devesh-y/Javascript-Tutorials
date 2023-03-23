var one="5.5598";
var two="56";
console.log(  +one+ (+two));
//here the + operator before one helps to convert string to number
var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
s1++;
console.log(+s2);
console.log(+b);
console.log(s1);
var o = {
    valueOf: function() 
    {
        return -1;
    }        };
console.log(--o);