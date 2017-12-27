var input= "14	0	15	12	11	11	3	5	1	6	8	4	9	1	8	4";
var index_max = 0
input = input.split('\t')


const calc_max = (acc, curr_value, current_index) => {
	
	
	// get the number value from acc object or number
	const current_max = (typeof acc.max === 'number') ? acc.max : acc;
	console.log(acc)
	//console.log(acc, acc.max, parseInt(curr_value), current_index)
	// calc max and check if index has changed
	max = Math.max(current_max, curr_value)
	return {
		max,
		current_index
		//current_index --> new index if max has changed, old index otherwise
	}
}

//const calc_index = ()

const calc_spread = (m, input) =>{
	console.log (input.length);
	while (input[index_max]>1){
		for (var i = index_max ; i < input.length; i++){
			input[i]=(input[i]+1);
			//console.log(temp[i]);
			input[index_max] = input[index_max] - 1;
		}
		if (i == input.length){
			let  i = 0;
			while (input[index_max] > 1){
				if (i!=input[index_max]){
					input[i] = (input[i]+1)
					i++;
				}
				else
					i = i+2
				input[index_max] = input[index_max] - 1;
			}
		}
	}
	return input
}

const max_inBlock = input.reduce(
	calc_max,
	input[0]
);
var m = parseInt(max);
input.map((current_element, index) => {
 	//index_max = (current_element == m) ? index;
 	if (current_element == m)
 		index_max = index;
 	return index_max;
 });
 console.log (index_max); 
 
console.log (m)
console.log (input);

calc_spread (m, input);



//temp = Object.keys(input).map(function(key) {
//   return temp[key];
//});
//console.log(temp)
//while !(temp.include(max_inBlock))
//	index_max++
//index= temp.findIndex(max_inBlock);
//console.log(index_max);
//calc_spread()
/* const spread = temp.map(
	calc_spread,
	temp[index]
	);
	
//last_array = temp;
//console.log(last_array);
 var obj = { foo: 'bar', baz: 42 };
var temp = Object.keys(obj).map(function(key) {
    return obj[key];
});
*/
