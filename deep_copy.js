var object1={
    name:"dev",
    age:20
}

var object2=structuredClone(object1);
object2.gender="male"
console.log(object1, object2);