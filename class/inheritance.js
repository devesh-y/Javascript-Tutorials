//new way using es6 classes
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

class programmer extends employee{
    constructor(name,exp,divson,language){
        super(name,exp,divson);//it calls the constructor of employee
        this.language=language;
    }
    
}
let obj=new programmer("deve",45,46,"javasscrip");
console.log(obj);
