//only one constructor allowed in javascript classes
class employee
{
    constructor(name,exp,divison){
        this.name=name;
        this.exp=exp;
        this.divison=divison;
    }
    slogan(){
        return "hello";
    }
    static add(a,b){
        return a+b;
    }
}
let devesh=new employee("deve",4,34);
console.log(devesh);
console.log(employee.add(3,4));
