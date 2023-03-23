var arr=[5,10,35,60,75,6];
var tocalculate=arr.every(function(item,index,arr)
{
    return (item/5);
});
//here we know all values except 0 will be considered as true so here all return values are not zero, so all are considered as true
console.log(tocalculate);