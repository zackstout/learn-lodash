
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

// returns intersection of arrays:
var intersection = _.intersection(arr, [2, 1, 44, 43]);

// returns array with specified elements removed:
var pull = _.pull(arr, 1, 2, 3);








// another round:

// This is like ES6 spread operator (. . .):
var old_object = {a: 'hi'};
var new1 = {a: 'you'};
var new2 = {b: 'goose'};
var result = _.assign(old_object, new1, new2);

// Say you have a function that returns a result. You want to fill an array with its results, called n times:
var result = _.times(5, getRandomNum);
// could also do with create empty array then map.

// NOTE: _.times can basically replace FOR LOOPS!



var user = _.find(users, { lastname: 'doe', age: 12 }); // can pass multiple constraints.
// will it return array if finds multiple?

// Avoid 'cannot set property' errors with _.set:
_.set(object1, "propertyThatMayExist", "newValue");

// Cool, for scraping:
_.deburr("déjà vu");

// For getting an object with a certain property from an array -- but isn't that what _.find was for?:
original_arr = _.keyBy(original_arr, "id");
var thing = original_arr["32"];
// just a shortcut for _.find I guess

var copy = _.cloneDeep(original_obj); // avoid mutation

_.sortedUniq(sortedArray); // Is this like set? Is there a better way? Seems to only work with sorted array.



ownerArr.map(owner => owner.pets[0].name); // Vs....
_.map(ownerArr, 'pets[0].name'); // Eh...


// Nice, say you want [ball_1, ball_2, ball_3, ...]:
var balls = _.times(10, _.uniqueId.bind(null, 'ball_'));
// Or even...
balls = _.times(10, _.partial(_.uniqueId, 'ball_'));


_.random(10, 20); // Nice
_.sample(array1); // Very nice


// Get an object with certain properties omitted:
objA = _.omit(objA, ['prop1', 'prop2']);
objA = _.omit(objA, _.isNumber);

var objB = _.pick(objA, ['prop1', 'prop2']); // Make new object with only those properties.



// _.flow? _.curry?



// Hmm Yeah it's true, it seems most of this is supported by ES6 already.... Let's see if there are like 5 shortcuts that make it worth including, kind of like p5.





// The other side: ES6:
// https://www.sitepoint.com/lodash-features-replace-es6/

_.head([1, 2, 3]);
// 1
_.tail([1, 2, 3]);
// [2, 3]

// becomes
const [head, ...tail] = [1, 2, 3]; // Destructuring syntax

// NOte that spread can also clone.


// Spread can also allow for variable arguments to a function -- damn, doin triple duty!


// Currying becomes easier with TYPE SIGNATURES.  --- But arrow functions also alleviate this??

// Arrow functions also ameliorate PARTIAL FUNCTIONS

//



var object = { 'a': 1, 'b': '2', 'c': 3 };

// return _.pick(object, ['a', 'c']);
// { a: 1, c: 3 }

// becomes

const { a, c } = { a: 1, b: 2, c: 3 };






console.log(fill);
