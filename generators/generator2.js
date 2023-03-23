const arr=["sdf sdf",543,'d'];
function* func(){
    yield* arr;
    yield 2;
}
let me=func();
console.log(me.next());
console.log(me.next());
console.log(me.next());
console.log(me.next());
console.log(me.next());
