
// Following this excellent tutorial: https://johnresig.com/apps/learn/

// Nice ex of recursion:
function yell(n) {
  return n > 0 ? yell(n-1) + "a" : "hiy";
}

// To preserve an object's method through destruction of the object, give it a name:
var ninja = {
  yell: function yell(n) {
    return n > 0 ? yell(n-1) + "a" : "hiy";
  }
};

// If we don't want to name it, we can replace yell(n-1) with arguments.callee(n-1)

// - .call and .apply are ways of changing the context (the referent of “this”)
// - You can cache the return values of a function by adding functionName.cache = { } etc.
// - If a function is an object’s property, “this” refers to the object itself.

var object = {};
function fn() {
  return this;
}
fn.call(object); // returns object

function add(a, b) {
  return a + b;
}

add.call(this, 1, 2); // returns 3
add.apply(this, [1, 2]); // also returns 3. Useful with Math object. As is ..., the replacement.

function loop(arr, fn) {
  for (var i=0; i < arr.length; i++) {
    fn.call( arr, arr[i], i);
  }
}
var num = 0;
loop([0, 1, 2], function(value, i) {
  value = num++;
});

// When you forget to use the "new" keyword, can accidentally overwrite global variables (e.g. window.name)

// We can guard against this with: if (!(this instanceof arguments.callee))

// To merge objects, we can use a variable number of arguments:
function merge(root) {
  for (var i=1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      root[key] = arguments[i][key];
    }
  }
  return root;
}

// apply seems kind of silly....like it doesn't matter what you pass in as the first argument...??

// It seems that the arguments keyword converts a group of arguments pass in into an array.
// Oh, actually it's an "array-like object"...... Yuck
// To make into a real array:
function makeArray(arr) {
  return Array().slice.call( arr ); // implicitly assumes slice from 0; i.e. just copy contents.
}


// CLOSURES allow for private properties:
function Ninja() {
  var slices = 0;
  this.getSlices = () => slices;
  this.slice = () => slices++;
}
// ninja = new Ninja(); ninja.slices will return undefined.


// can also use IIFEs for private scope:
for (var d=0; d < 3; d++) {
  (function(d) {
    setTimeout(function() {
      console.log(d);
    }, d * 200);
  })();
}


// Generators in ES6
// Signified by the function* idMaker() { } syntax.
