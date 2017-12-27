var print = console.log
var input = "14,0,15,12,11,11,3,5,1,6,8,4,9,1,8,4";
input = input.split(",").map(el=>parseInt(el))
var found = {}
var j=0;

function distribute(input,max,index) {
	input[index] = 0;
	for (var i=0;i<max;i++) {
		var next_index = (index+i+1) % input.length;
		input[next_index]++;
		j++;

	}
	return input;
}


var i=0;
while (!found[input.join("-")]) {
	found[input.join("-")] = true;

	var max = Math.max.apply(null,input)	
	var index = input.indexOf(max);
	input = distribute(input,max,index);

	i++;
}
print (j)
print(j%i)