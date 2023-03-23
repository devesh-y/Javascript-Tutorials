var array1=new Array(2);
array1[0]=["hello1","hello2"];  //method 1
array1[1]=["hello3"];
console.log(array1[0][1]);


var arrray2=[["hello1"],["hello3","hello4"]];//method 2             //there can be any number of member in any particular array
console.log(arrray2[1][1]);

console.log(arrray2[1].length);

console.log("\n");
for(var i=0;i<arrray2.length;i++)
{
    for(var j=0;j<arrray2[i].length;j++)
    {
        console.log(arrray2[i][j]);
    }
}


var hello=new Array(["to","have","a"],[23,false]); //method 3
console.log(hello);