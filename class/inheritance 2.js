//tradition old method using constructor function and prototypes
function obj(tempname,tempage){
    this.name=tempname;
    this.age=tempage;

}
let obj1=new obj("devesh",20);

obj.prototype.getnameandage=function(){
    console.log(`name is ${this.name} and age is ${this.age}`);
}
obj1.getnameandage();

let obj2=Object.create(obj1);
console.log(obj2.name);
obj2.getnameandage();
