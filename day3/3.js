const input= 165;
var sqr = [];
var step = 0;

function sqr_of_odd_numbers(a){
	var i =1;
	var sqr = 0;
	while (sqr <= 589){
		sqr = Math.pow (i,2);
		i = i+2;
		step++; 
		//console.log ("its in the loop");
	}
	return step
}

/*function find_sqr(input){
	if (sqr >= input) {
		step = Math.floor(Math.floor(sqr));
		console.log (step);
		step = step + (step - 1);
		return step;
	}
}
*/
sqr_of_odd_numbers(input);

//const corner = sqr.find(find_sqr(input))

//console.log (step + (step-1));

console.log(Math.floor((Math.sqrt(82))));
console.log(step);
	