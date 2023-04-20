const name = "myProperty";
//here we define a property name
//and then using it as a key
const myObject = {
  [name]: "3434"
};
console.log(myObject[name]);


var myobject={
    name:"devesh",
    age:20, 
    5:true,
    hello:
    {
        gender:"male"
    }
};
console.log(myobject,myobject.name);
console.log(myobject.age);
console.log(myobject["5"]);//numeric property names are automatically converted to strings.
console.log(myobject["age"]);



delete myobject.age;           //important



const per = {fname:"John", lname:"Doe", age:25}; 
for (let x in per) {                //here x is fname so we are gettinf per["fname"];
  console.log(per[x]);
}



console.log(myobject.hello.gender,myobject["hello"]["gender"]);

var mydev={};//       it is same as var mydev=new Object();


var xyz="name";
console.log("the value is",myobject[xyz]);


var myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}
console.log(myObj.cars[0].name,myObj.cars[0].models[1]);

console.log(myObj);




var person1 = {
    toLocaleString : function () 
    {
        return "Nikolaos";
    },
    
    toString : function() {
        return "Nicholas";
    }
};
var person2 = {
    toLocaleString : function () 
    {
        return "Grigorios";
    },
    toString : function() 
    {
        return "Greg";
    }
};
var yone=[person1,person2];
console.log(yone); //here nothing defined to use which function so it will by default always try to toString()
console.log(yone.toString()); //Nicholas,Greg
console.log(yone.toLocaleString());    //Nicholas,Grigorois

console.log(yone[0].toLocaleString());
console.log(yone[0]);

