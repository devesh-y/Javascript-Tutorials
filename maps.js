let mymap=new Map();
console.log(mymap);
mymap.set("devesh",20);
mymap.set("dev",232);
mymap.set("deve",234);
console.log(mymap);

console.log(mymap.get("dev"));
console.log(mymap.size);
for(let [key,value] of mymap){
    console.log(key+"-> "+value);
}
console.log(mymap.keys());
for(let key of mymap.keys()){
    console.log(key);
}
for(let val of mymap.values()){
    console.log(val)
}

mymap.forEach(function(value,key){
    console.log(key, value);
})

console.log(Array.from(mymap));
console.log(Array.from(mymap.keys()));
console.log(Array.from(mymap.values()));
console.log(mymap.has("deve"));
mymap.delete("deve");
console.log(mymap);
