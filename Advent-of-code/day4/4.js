var index1 = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', function (line) {
	calc(line);
})

const calc_iteration = (element, index, array) =>{
	console.log(`computing ${element} - ${array}`);
	if (array.includes(element)){
		if (array.indexOf(element) != index )
			return 
	else{
		if (array.indexOf(element) === ((array.length) - 1))
			return index1++
		else 
			return 
		} 
	}	
	
}


function calc(line){
	temp = line.split(" ");
	const iteration = temp.filter(
	calc_iteration
		);
	console.log(index1);
};
