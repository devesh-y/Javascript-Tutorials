
numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x]+"\n"; 
}

console.log(txt);

for (let x in numbers) {
    console.log(x,"m"); 
}