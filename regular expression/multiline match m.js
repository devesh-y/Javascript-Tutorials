var text=`is this
all there
dfg is`;
var pattern=/^is/m;
//here the sign ^ sees in from the front of each line and return a the first matching word
//if g is also applied then it will return the array
console.log(text.match(pattern));

text=`is this
all there
dfg is`;
pattern=/is$/m;
//here the dollar sign will check from the last of each line and return the 
//first matching word
console.log(text.match(pattern));