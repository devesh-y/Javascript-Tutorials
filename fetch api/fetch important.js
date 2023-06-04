fetch(`https://anapioficeandfire.com/api/houses/1`).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("error occured");
})
console.log("hello world");



//whether you use then or not , it will be always asynchronous
//the only way is to use async await