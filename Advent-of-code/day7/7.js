var temp = [];
var program = {}
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})
lineReader.on('line', function (line) {
	calc(line) 
})


function calc(line){
	if (line.includes("->")){
		temp.push(line);
		//console.log(temp)
	}
	temp = temp.slice (0 , 3);
	console.log(temp)
}


//function buttom_program (name, instruction_line){
//	var min = Math.min.apply(null, temp)
//}