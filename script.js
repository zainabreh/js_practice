// Closures

// Functions that have an access to it's parent function

// Exampl 01:

const button = document.getElementById("counter");

let count = 0;

button.addEventListener("click", function() {
    count++;
    console.log(`Count: ${count}`);
});


// Exampl 02:

function createTimer() {
    let seconds = 0;
  
    return function() {
      seconds++;
      console.log(`Time: ${seconds} seconds`);
    };
  }
  
  const timer = createTimer();
  timer(); 
  timer(); 
  timer()
