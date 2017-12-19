
console.log("Hello, Day 2");

const input = "5 1 9 5";
let checksum = 0;
let max = 0;
let temp = 0;
let tempmin=0;
let min = 0;
let lnght = (input.length);

for(i=0; i<lnght; i++) {
	if(input[i]!= " ") {
		temp = parseInt(temp) + parseInt((input[i]));
		tempmin= parseInt(tempmin) + parseInt((input[i]);
	}
	else{
		if (((parseInt(temp))>(parseInt(max))){
			parseInt(max) = parseInt(temp) ;
		}
		if (((parseInt(min)))<(parseInt(tempmin))){
			parseInt(min) = parseInt(tempmin);
		}
	}
}
checksum = max - min ;
console.log ("the checksum:")
console.log(checksum);
