let myset=new Set();
myset.add('this');
myset.add('f');
myset.add('b');
myset.add('b'); //no repeat
console.log(myset);
let myset2=new Set([23,"234234",'3']);
console.log(myset2);
console.log(myset2.has(23));
myset.delete(23);

for(let item of myset){
    console.log(item);
}
myset.forEach(function(element){
    console.log(element);
});
let arr=Array.from(myset);
console.log(arr);
