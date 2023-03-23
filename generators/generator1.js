
function* myiterator(){
    yield 1;
    yield 2;
}

let me=myiterator();
console.log(me.next());
console.log(me.next());
console.log(me.next());

function * generator2(){
    let i=0;
    while(true){
        yield i++;
    }
}
let thi=generator2();
console.log(thi.next());
console.log(thi.next());
console.log(thi.next());
console.log(thi.next().value);
