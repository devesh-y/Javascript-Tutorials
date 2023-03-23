var x=5;
console.log(x.toString(2));
x=x<<1;
console.log(x);
console.log(x.toString(2));
x=5;
x=x>>1;
console.log(x);
console.log(x.toString(2));
console.log("\n");



var x=-5;
console.log(x.toString(2));
//the signed bit will be always there because it is fixed for negative number as we know already
x=x<<31;
console.log(x);
console.log(x.toString(2));
x=-5;
x=x>>1;
console.log(x);
console.log(x.toString(2));
