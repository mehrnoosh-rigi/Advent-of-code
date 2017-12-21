const input= 165;
var sqr = [];
var step = 0;
var right =[];
//var lenght = 0;


function hypoenuse(){
	var i = 1,
		power = 0;
	sqr.push(1);
	console.log(sqr[0]);
	while (power <= parseInt(input)){
		i = i+2;
		power = (Math.pow (i,2)) ;
		sqr.push(power);
		step++;
		console.log(sqr);
	}
	return sqr
}


function cordinate_right(sqr){
	right.push(2);
	var rght=0;
	for (var i=1; i<step; i++){
		rght = parseInt(sqr[i+2]) + parseInt(right[i]);
		console.log (rght); 
	}
}

/*const cordinate_right = () => {
	right [0] = 2;
	var calc = 0;
	for (var i = 0; i <= step ; i++) {
		calc = parseInt(right[i-1]) + parseInt(sqr[i-1]);
		console.log(calc);
		right.push(calc);
	}
	return right
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
hypoenuse();
//const cor_right = sqr.map(cordinate_right);
cordinate_right(sqr);

