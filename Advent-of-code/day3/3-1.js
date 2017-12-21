const input = 347991;
var step = 0
var array = [][];

function hypoenuse(){
	//var i = 1,
		power = 0;
	//sqr.push(1);
	//console.log(sqr[0]);
	while (power <= parseInt(input)){
		i = i+2;
		power = (Math.pow (i,2)) ;
		//sqr.push(power);
		step++;
		//console.log(sqr);
	}
	return step
} 

function fill_array(){
	var index_i = step * 2 + 1;
	var index_j = step * 2 + 1;
	while (input > 0){
		array[index_i][index_j].push(input);
		input = input - 1;
		index_j = index_j -1;
		if (index_j == 0){
			array[index_i][index_j].push(input);
			input = input - 1;
			index_i = index_i - 1;
		}

		}
	}

}