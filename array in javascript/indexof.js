 fruits = ["Banana", "Orange", "Apple", "Mango","Apple","Papaya"];
console.log(fruits.indexOf("Apple"),fruits.lastIndexOf("Apple",5));
//lastindexof finds starting from last and return the actual index

console.log(fruits.indexOf("Apple",1),fruits.lastIndexOf("Apple",5));
//second argument helps to find the elements fastly by given from where to start searching, by default it is zero
//if no substring found then -1 will be return 