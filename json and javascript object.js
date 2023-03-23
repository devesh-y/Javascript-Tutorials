//here this below is a json object as well as javascript objects
//because both can have this syntax

//in javascript object the key dont need to be in double quotes.
//but in json object the key should be in double quotes.
const jsonobject = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
};

console.log(jsonobject["age"]);
console.log(jsonobject.age);



//now its a json string
//Inside the JSON string there is a JSON object literal:
const jsonstring = '{ "name": "John", "age": 22 }';


const JavaScriptobject = JSON.parse(jsonstring);
//here json.parse will convert the JSON string into a JavaScript object

console.log(JavaScriptobject);

// and we can convert the javascript object into a JSON string by using json.stringify() function

const newjsonstring = JSON.stringify(JavaScriptobject);

console.log(newjsonstring);

