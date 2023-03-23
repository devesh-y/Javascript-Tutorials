//parseInt(string, base);
// A base parameter specifies the number system to use: 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
//Nan means not a number
console.log(parseInt("10"));
console.log(parseInt("10.00"));
console.log(parseInt("10.63"));
console.log(parseInt("34 45 66"));
console.log(parseInt(" 60 "));
console.log(parseInt("40 years"));
console.log(parseInt("He was 40"));

console.log("\n");
console.log(parseInt("11", 2));
console.log(parseInt("070"));
console.log(parseInt("10", 8));
console.log(parseInt("0x10"));
console.log(parseInt("f", 16));

