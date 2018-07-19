

// An inner function that has access to the enclosing function's variables

// Inner functions can solve the problem of wanting to update a "global" veriable without making it actually global.

var add = (function() {
  var counter = 0;
  return function() {
    counter ++;
    return counter;
  };
})();

// Now, the counter variable can only be changed using the add function.

// Our return function, a closure, has access to the parent scope even though it has closed.

// Closures are solving the problem that local context is destroyed when a function is completed.



// https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8











// closure
