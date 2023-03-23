
let obj={
    name:"devesh",
    age:20,
    college: "delhi techno"
};

for( index=0;index<Object.keys(obj).length;index++){
    let key=Object.keys(obj)[index];
    let element=obj[key];
    console.log(key+": "+element);
}

for( let i in obj){
    console.log(i+ ": "+ obj[i]);
}
