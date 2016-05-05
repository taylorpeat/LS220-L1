function oddElementsOf(arr) {
  for (var i = 0, new_array = []; i < arr.length; i++) {
    if (i % 2 == 1) {
      new_array.push(arr[i]);
    }
  }
  return new_array;
}

var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits); // Returns [8, 16, 42]



function combinedArray(even, odd) {
  for (var i = 0, new_array = []; i < even.length; i++) {
    if (i % 2 == 1) {
      new_array.push(odd[i]);
    } else {
      new_array.push(even[i])
    }
  }
  return new_array;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ["A", "L", "V", "A", "R", "H"];

combinedArray(digits, letters); 



function reverseCombine(array) {
  return array.concat(array.slice().reverse());
}

console.log(reverseCombine([1,2,3]));



function joinArray(arr, joiner) {
  return arr.join(joiner || "");
}

joinArray(["a", "b", "c"], "+"); // Returns "a+b+c"
joinArray([1, 4, 1, 5, 9, 2, 7]); // Returns "1415927"



function sortDescending(arr) {
  return arr.sort(function(a, b) { return b - a; });
}

sortDescending([23, 4, 16, 42, 8, 15]);


function matrixSums(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reduce(function(prev_val, current_val) {
      return prev_val + current_val;
    });
  }
  return arr;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);


function uniqueElements(arr) {
  new_array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!new_array.some(function(arr_val) { return arr[i] == arr_val; })) {
      new_array.push(arr[i]);
    }
  }
  return new_array;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]); // Returns [1, 2, 3, 4, 5]