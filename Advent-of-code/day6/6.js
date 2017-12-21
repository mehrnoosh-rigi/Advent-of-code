const input= "14	0	15	12	11	11	3	5	1	6	8	4	9	1	8	4";
var temp = input.split('\t');


const max_inBlock = temp.reduce(
	calc_block,
	{
		max: temp[0]
	}
	)

function calc_block (acc, item) =>{
	const max = Math.max(acc)
	console.log (max);
	return max
}

