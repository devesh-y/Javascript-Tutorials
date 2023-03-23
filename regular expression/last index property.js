var text="the rain is falling and pain in spain from the ain sky";
var pattern =/ain/g;
let result="";
while(pattern.test(text)==true){
    result+="found at position "+ pattern.lastIndex +"\n";
}
console.log(result);
//the lastindex property specifies the index at which to start the next match
