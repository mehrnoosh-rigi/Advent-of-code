var min=0;
var max=0;
var finalsum = 0;
var checksum = 0 ;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})
lineReader.on('line', function (line) {
	calc(line);
})

function is_lower(a, b) {
	return (parseInt(a)<parseInt(b));
}

function take_min(a, b) {
	if (is_lower(a, b))
		return a;
	else
		return b;
}

function take_max(a, b) {
	if (is_lower(a, b))
		return b;
	else
		return a;
}
function checksum_(a, b){
	//console.log(`computing ${a} - ${b}`);
	checksum =  a - b;
	return checksum
}

const minmax_inline = (acc, item) => {
	const min = take_min (acc.min, item)
	const max = take_max (acc.max, item)
	console.log (min);
	return {
		min: take_min(min, item),
		max: take_max(max, item),
		checksum: checksum_(max, min)
	}
		};

function final_sum_ (a) {
	finalsum = finalsum + a;
	return finalsum;
}

function calc(line){
	temp = line.split('\t');

	const minmax = temp.reduce(
		minmax_inline,
		{
			min: temp[0],
			max: temp[0],
			checksum: 0
		}
		);

	const finalsum = final_sum_(checksum)
		
	console.log(minmax);
	console.log(finalsum);
};
