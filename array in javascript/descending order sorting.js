var hello = [3, 5, 1, 6, 2, 4];

function mysort(a,b)
{
    if (a >= b) {
        return -1;
    }
    else if (a < b) {
        return 1;
    }
   
}
hello.sort(mysort);
console.log(hello);