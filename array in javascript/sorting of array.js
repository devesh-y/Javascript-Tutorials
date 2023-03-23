var hello = [3, 1, 2, 10, 15];
console.log(hello.sort());               //this line will work also without no argument in sort( here)
//but there is one problem that the sort method always call String() casting function to convert it into string so thats why the above sorting done is 
//wrong from int opinion but right from string opinion

//so  you have to define your own

function mysort(a,b)
{
    if(a>b)
    {
        return 1;                   // here if a>b then it means sorting needs to be done between the two varibles done by the internal function
    }
    if(a<b)
    {
        return -1;              //here it means if a<b then no need to something 

    }
    if(a==b)
    {
        return 0;
    }
}

hello.sort(mysort);//sometimes it may be possible when you required to write the argument also as function(a,b)  here
console.log(hello);

//Both reverse() and sort() return a reference to the array on which they 
//were applied