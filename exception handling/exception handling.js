
let a=4;
try{
    if(a==5){
        throw "hello";
    }
    else{
        throw new Error(" its an error");
    }
}
catch(data){
    console.log(data);
    console.log(data.message);
    console.log(data.name);

}
finally{
    console.log("we are completed");
}
