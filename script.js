// Pure Function

// Only depends on its input arguments
// Only returns a value based on those arguments
// Does not modify external state or have any side effects
// Always returns the same output for the same inputs

const exchangeRate = 0.84;

function convertUSDToEUR(amount) {
  return amount * exchangeRate;
}

console.log(convertUSDToEUR(100));
console.log(convertUSDToEUR(50));
console.log(convertUSDToEUR(200));








// IIFE stands for Immediately Invoked Function Expression. It's a self-invoking anonymous function that is executed immediately after it's defined.


(function() {
    var random = Math.random();
    console.log("Random number:", random*5);
  })();









// Higher Order Function

// In JavaScript, a higher-order function (HOF) is a function that takes another function as an argument or returns a function as a result.


const arr = [1, 2, 3, 4, 5];

const evenArr = arr.filter((e)=> {
  return e % 2 === 0;
});

console.log(evenArr);
