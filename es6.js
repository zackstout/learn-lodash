
// Might as well put these notes here:

// USES FOR SPREAD:
// (1) Call a function with a set of parameters stored in an array: doStuff(...args)
// (instead of apply)
//
// (2) Combine arrays. arr1.push(...arr2).
//
// (3) Copy an array: let arr2 = [...arr1]
//
// (4) Convert array-like objects to true arrays.
//
// (5) Working with Math functions: Math.min(...numbers)
//
// (6) Destructuring: let {x, y, ...z} = {x: 1, y: 2, a: 1, b: 3}
// // z is {a: 1, b: 3}

// Copy an object's properties into a new object, and add new properties.

// Makes it easy to concat arrays: arr2 = [1, 2, ...arr3, 5, 6]



// Syntactic sugar for object literals:
// var x = 0, y = 0
// obj = { x, y }


// Destructuring with default values:
// var obj = { a: 1 }
// var list = [ 1 ]
// var { a, b = 2 } = obj
// var [ x, y = 2 ] = list


// Unknown number of arguments:
// function f (x, y, ...a) {
//     return (x + y) * a.length
// }




// Great read on spread operator: https://dmitripavlutin.com/how-three-dots-changed-javascript/





// Lol arrow functions Shade: https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/fig1.png
