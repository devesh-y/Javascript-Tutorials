
        
function generalcar(tempname,tempspeed){        //constructor function
    this.name=tempname;
    this.speed=tempspeed;
    this.run=function(){
        console.log(this.speed);
    }
    this.topspeed=function(){
        console.log(`the top speed of this`);         
    }
}
//you cannot add properties to the constructor from outside ,for that you have to use the prototype
var obj1=new generalcar('audi',200);
console.log(obj1.run());
obj1.do=false;
console.log(obj1.do);
