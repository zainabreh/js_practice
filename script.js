// Object Destructing

// In object Destructing we access the object data by values name without any order.

let obj = {
  name: "zainab",
  age: 20,
  designation: "Web developer",
  qualification: "Bachlor",
  gender: "female",
};


let { designation, name } = obj;

console.log("Designation:  " + designation + ",  Name:  " + name);





//Array Destructing


const std = ["Ali", "Balla", "Cella", "Danial"];

let [s1, s2] = std;

console.log(`${s1} and ${s2} are Students`); //output:Ali and Bella are students





//Spread Operator

// This operator is used to divide the content of iterables like array,strings and obj into
// individuals elements.


const n1 = [1, 2, 3];
const n2 = [4, 5, 6];

const combined = [...n1, ...n2];
console.log("Spread operator is called",combined);










// ----------Rest Operator

// we use rest parameter when user wants to enter indefinite number of values in function argument and those values are stored in the form of array, we traverse through that array using loop to perform specific operation

// 1)

const add = (...arg) => {
  let sum = 0;
  for (v of arg) {
    sum += v;
  }
  console.log("Sum of Rest values", sum); //Sum of Rest values 45
};

add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// 2)

function intro(name, ...spec) {
  console.log(`Welcome, ${name}!, Your Qualities are: `);
  for (let int of spec) {
    console.log(int);
  }
}

intro("zainab", "WebDeveloper,", "Software Engineering,", "Fighter,", "Killer");
