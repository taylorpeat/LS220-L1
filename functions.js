function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(1, 2, 3));

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

function array_average(array) {
  var total = 0;
  for (var i = 0, length = array.length; i < length; i++) {
    total += array[i];
  }
  return total / length;
}

console.log(array_average([1, 2, 3]));

function array_sum(array) {
  var total = 0;
  for (var i = 0, length = array.length; i < length; i++) {
    total += array[i];
  }
  return total;
}

console.log(array_sum([1, 2, 3]));

function fizzbuzz(limit) {
  for (var i = 1, word = ""; i <= limit; i++, word = "") {
    if (i % 3 == 0) { word += "Fizz"; }
    if (i % 5 == 0) { word += "Buzz"; }
    if (word == "") { word = i; }
    console.log(word);
  }
}

fizzbuzz(15);

function random_number(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

console.log(random_number(10));