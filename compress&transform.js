const response=await fetch(url)
const {readable,writable}=new TransformStream();


//compress data from url1
response.body.pipeThrough(new CompressionStream("gzip")).pipeTo(writable);

//post to url1
await fetch(url2,{method:"post",body:readable});