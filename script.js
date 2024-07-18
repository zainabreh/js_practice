// Asynchronous Programming

// Promises

// This features of es6 make a promise that the code will execute. if it successfully executed or failed in both cases user or subscriber will be notified.

// 1)

let p = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  resolve("I'm resolved");
  reject(new Error("I'm rejected"));
});
// then and catch are promise consumers,which are used to get the value of resolve and reject
p.then((v) => {
  console.log("value ", v); //this wil output the value of resolve
});
p.catch((err) => {
  console.log("Error", err); //present an error i'm rejected
});
p.finally(() => {
  console.log("I will run at any cost");
});

// promise chaning

const data = (d) => {
  return new Promise((resolve, reject) => {
    if (d) {
      resolve(`The value Entered by the user is ${d}`);
    } else {
      reject("User have not Entered Data");
    }
  });
};

let inp = "Hay";

const p1 = data(inp);

p1.then((v) => {
  console.log(v);
  return v.toUpperCase();
})
  .then((w) => {
    console.log(w);
    return w.toLowerCase();
  })
  .then((a) => {
    console.log(a);
  });

p1.catch((err) => {
  console.log("Reject Block Executed", err);
});

// catch code will execute as no argument is passed if the inp varaible is passed to data function as arugement the the value of the resolve will be displayed









//   Async/Await

// It's the sugar synthatic code for promises to reduce the line of code,it's easy to use and undersatndable.It's also used to perform asynchronous programming.

// Real world example

const fetchData = async () => {
  try {
    const res = await fetch("Some url");
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log("Network Error!!!");
  }
};
