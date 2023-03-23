//you need not to use new also, you can write as var newarray=Array(5);


var newarray=new Array(5);     //method 1                        when only one argument than it is size, if more than one then it is the values


console.log(newarray.length);

//you can first set the length as
//newarray.length =1;   then you cannot access the 2nd element,it will show undefined because length is only 1



newarray[2]="five";
newarray[3]=56;
//you can add sixth element also newarray[5]="something"
console.log(newarray[3]);
console.log(newarray[2]);


var new2=["hello",34,true];//method 2
for(var i=0;i<=2;i++)
{
    console.log(new2[i]);
}

console.log(new2.length);

var arr3=new Array("hello", 1,false); //method 3
console.log(arr3[2]);

