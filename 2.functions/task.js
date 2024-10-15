function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;


	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	let avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}




function summElementsWorker(...arr) {
	
 

	const total = arr.reduce(function(sum, currentArr) {
		return sum + currentArr
	}, 0)
	return total;

  
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
		const maxValue = Math.max(...arr);
		const minValue = Math.min(...arr);

		return maxValue - minValue;

}
function differenceEvenOddWorker(...arr) {
 

	let sumEvenElement = 0;
	let sumOddElement = 0;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

 let sumEvenElement = 0;
 let countEvenElement = 0;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
    return sumEvenElement / countEvenElement;


}

function makeWork(arrOfArr, func) {
 let maxWorkerResult = -Infinity;

 for (let i = 0; i < arrOfArr.length; i++) {
  const resulatFunc = func(...arrOfArr[i]); 
    if (resulatFunc > maxWorkerResult) {
  maxWorkerResult = resulatFunc;
 }
 }
  return maxWorkerResult;
}