
var arr = [1, 2, 3, 2, 1, 2, 43, 4, 3];

// chunks an array into an array of smaller arrays:
var chunked = _.chunk(arr, 2);

// concatenates two arrays without mutation:
var concat = _.concat(arr, [1, 2], [[2]]);

// returns array of all elements in head array *not* contained in tail arrays:
var diff = _.difference(arr, [2, 3, 2, 22, 3], [1]);

// drops first n elements from the array (default n=1):
var drop = _.drop(arr, 5);

// drops last n elements:
var dropRight = _.dropRight(arr, 5);

// drops last n elements WHILE a condition is true (or UNTIL it is false):
// var dropRightWhile = _.dropRightWhile(arr, )

// fills array with values starting at n (inclusive) and ending at k (exlusive):
var fill = _.fill(arr, 'a', 1, 5);

// returns a fully flattened array:
var flattenDeep = _.flattenDeep(arr);

// takes array of key/value array-pairs and returns object:
var fromPairs = _.fromPairs(arr);

var intersection = _.intersection(arr, [2, 1, 44, 43]);





console.log(fill);
