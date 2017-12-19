var finalcount = 0 ;
var index1 = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', function (line) {
	calc(line);
})

const calc_itterate = (element, index,array) =>{
	console.log(`computing ${element} - ${array}`);
	index1= array.length;
	console.log (index1);
	if (array.includes(element)){
		if ((array.indexOf(element)!=index))
			index1--;
	}
	return (index1);
} 

function calc(line){
	temp = line.split(" ");
	const itteration = temp.filter(
		calc_itterate
		);
	finalcount = index1 + finalcount
	console.log(finalcount);
};
