//a symbol is a primitive data type used to create unique identifiers. 
// Symbols are created using the Symbol() function, which returns a unique symbol value that can be used as a property key on objects. Symbols are always unique, even if they have the same description, and they cannot be coerced into strings or other primitive types.  

let sym=Symbol('me devesh');// we cannot use new because Symbol is not a constructor
let sym2=Symbol('me devesh');
console.log(sym);
console.log(sym==sym2);
//Every Symbol() call is guaranteed to return a unique Symbol.
let obj2={

}
obj2[sym]="mymy";
obj2[sym2]="deve";
console.log(obj2);


let obj={
    
}
obj[sym]="devesh";
obj["name"]="sdfsafdsaf";
console.log(obj);

//this loop will ignore the symbols
for(let k in obj){
    console.log(obj[k],k);
}


//on converting to JSON it also ignore symbol
let js=JSON.stringify(obj);
console.log(js);
console.log(JSON.parse(js));
