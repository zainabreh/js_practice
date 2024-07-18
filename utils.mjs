// default export

export default function greet(name) {
  console.log(`Hello, ${name}! Nice to meet you.`);
}



// named export
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
