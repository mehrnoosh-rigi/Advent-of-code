var count = 0 ;
let temp=[];
var i= -1;
var j=0;
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
})

lineReader.on('line', function (line) {
	i++;
	calc(line);
	i= -1;
})

function is_itterated (a, temp){
	console.log(`computing ${a} - ${temp}`);
	//console.log (i);
	//var mtch = new RegExp (a);
	//if (temp.match(mtch, 'g'))
	//if (temp.indexOf (a) > 0)
	if (temp.includes(a))
		count++
	console.log(count);
	return count

}

const calc_itterate = (acc, item) =>{
	i++
	return {
		itterated: is_itterated (temp, temp)
	}
} 

function calc(line){
	//j++;
	temp = line.split(" ");
	itteration = temp.reduce(
		calc_itterate,
		{
			started: temp[i],
			//compared: temp
		}
		);
	//count = count - j;
	console.log(count);
};
