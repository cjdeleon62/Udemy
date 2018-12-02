// Write a function printReverse() that takes an array as an argument
// and prints out the elements in the array in reverse order(don't actually reverse the array itself)
function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log('printing out the elements', arr[i]);
	}
}

// Write a function isUniform() that takes an array as an argument
// and returns true if all elements in the array are identical
function isUniform(arr) {
	if ((arr || []).length === 0) {
		console.log('please enter a valid function argument.');
		return false;
	} else if (arr.length === 1) {
		return true;
	} else {
		var first = arr[0];
		for (var i = 1; i < arr.length; i++) {
			if (first !== arr[i]) {
				return false;
			}
		}
		return true;
	}
}

// Write a function sumArray() that accepts an array of numbers and returns the sum of all the numbers in the array
function sumArray(arr) {
	var sum = 0;
	if ((arr || []).length === 0) {
		console.log('please Enter a valid array of numbers.');
	} else {
		for (var i = 0; i < arr.length; i++) {
			sum+= arr[i];
		}
		return sum;
	}
}

// Write a function max() that accepts an array of numbers and returns the maximum number in the array
function max(arr) {
	if ((arr || []).length === 0) {
		console.log('please enter a valid argument for this function');
	} else {
			return arr.sort(function(a, b) {
				return b - a;
			})[0];
	}
}


var testArr = [1, 4, 11, 12, 20, 12, 2];

printReverse(testArr);
console.log('is Uniform', isUniform(testArr));
console.log('sumArr:', sumArray(testArr));
console.log('max', max(testArr));
console.log('max', max([-5, 100]));
