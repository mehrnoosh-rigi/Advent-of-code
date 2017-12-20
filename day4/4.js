var finalcount = 0 ;
var index1 = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', function (line) {
	calc(line);
})

function is_itterate (element, index, array){
	if (array.includes(element)){
		if (array.indexOf(element) != index )
			return true;
	}
	else
		return false;
}

const calc_itteration = (element, index, array) =>{
	console.log(`computing ${element} - ${array}`);
	index1= array.length;
	console.log (index1);
	const non_itterate = is_itterate (element, index, array)
	if (is_itterate === true)
		return index1--;
	else
		return index1;
}

function calc(line){
	temp = line.split(" ");
	const itteration = temp.filter(
	calc_itteration
		);
	finalcount = index1 + finalcount
	console.log(finalcount);
};
