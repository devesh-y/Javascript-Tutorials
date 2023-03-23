function furu(hel,hello=5)
{
    console.log(arguments);         //arguments is an array so you can use arguments[0] or whatever
    console.log(Object.values(arguments));
    console.log(hel);
    console.log(hello);
}
furu("make",56);