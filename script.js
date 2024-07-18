// Event Bubbling

// In this,when an event occur it start from the target element and traverse/move in the upward direction until it reaches the root element in the DOM tree.



// Event Capturing

// In this,when an event occur it start from the root element of the DOM and traverse/move in the downward direction until it reaches the target element.

let container = document.getElementById("container")
let innerContainer = document.getElementById("inner-container")
let button = document.getElementById("button")

document.addEventListener('click', function(event) {
    console.log('Document clicked!');
  }, true); // Capture phase
  
  container.addEventListener('click', function(event) {
    console.log('Container clicked!');
  }, false); // Bubbling phase
  
  innerContainer.addEventListener('click', function(event) {
    console.log('Inner container clicked!');
  }, false); // Bubbling phase
  
  button.addEventListener('click', function(event) {
    console.log('Button clicked!');
  }, false); // Bubbling phase