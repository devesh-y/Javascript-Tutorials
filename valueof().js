var s=false;//used to write the primitive value
console.log(s.valueOf());


                   // var x=null;
                   // var y=undefined;
                    //console.log(x.valueOf());        error
                  //  console.log(y.valueOf());           error



var o = {
    valueOf: function() 
    {
        return -1;
    }        };

console.log(--o);


var my=[56,565,45,4];
console.log(my.valueOf());