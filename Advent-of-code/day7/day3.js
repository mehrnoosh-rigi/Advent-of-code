function matrix(rows,cols) {
	var m = [];
	for (var i=0;i<rows;i++) {
		var a = new Array(cols);
		for (var j=0;j<cols;j++) {
			a[j] = 0;
		}
		m.push(a);
	}

	return m;
}
print = console.log

var m = matrix(800,800);
var start_row = 400;
var start_col = 400;

var step_size = 0;
var row = start_row
var col = start_col
var looking_for = 347991;
for (var i=0;i<looking_for;i++) {
	if (i % 4 == 0) { //right
		step_size++
		for (var j=0;j<step_size;j++) {
			col++;
		}
	}
	if (i % 4 == 1) {//up
		for (var j=0;j<step_size;j++) {
			row--;
		}
	}
	
	if (i % 4 == 2) { //left
		step_size++
		for (var j=0;j<step_size;j++) {
			col--;
		}
	}

	if (i % 4 == 3) { //down
		for (var j=0;j<step_size;j++) {
			row++
		}
	} 
	//print(row + ":" + col);
}

print(row + ":" + col);
