let a, b;
[a, b] = [4435, 65];
console.log(a, b);
let arr = [34, 435, 897889, 43, 34, 3];
[a, b] = arr;
console.log(a, b);
[a, ...b] = arr;
console.log(a, b);     //b will be an array



let c, d, e;
({ a, b, c, d } = { d: 56, e: 565 });
console.log(a, b, c, d, e);
let p, q, r, s, t;
({ p, q, ...r } = { p: 45, s: 56, t: 565 });
console.log(p, q, r, s, t);


let obj = {
    model: "msi",
    age: 34,
    net: 2,
    tto: "dsfd"
}

const { model, age, net } = obj;
console.log(model, age, net);

