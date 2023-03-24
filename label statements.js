
var sum = 0, a = 1;

outerloop: while (true) 
{
	a = 1;

	// Label for inner loop
	innerloop: while (a < 3) 
    {
		sum += a;
		if (sum > 12) 
		{
			// Break outer loop from inner loop
			break outerloop;
		}
		console.log("sum = " + sum);
		a++;
	}
}
console.log("\n");
var sum = 0, a = 1;


outerloop: while (sum < 12) {
	a = 1;

	innerloop: while (a < 3) {
		sum += a;
		if (a === 2 && sum < 12) {
		
			continue outerloop;
		}
		console.log("sum = " + sum + " a = " + a);
		a++;
	}
}

console.log("\n");

blockOfCode: {
	console.log('This part will be executed');
	break blockOfCode;
	console.log('this part will not be executed');
}
console.log('out of the block');


