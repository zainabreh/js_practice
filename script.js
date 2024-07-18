// JSON Handling

/*JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write. It is a text-based format that is language-independent, making it a popular choice for exchanging data between different systems.*/

// JSON Parsing Methods

// 1)  json.stringify
// 2) json.parse




const jsonObject = {
    name: "John Doe",
    age: 30,
    occupation: "Developer",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    interests: ["reading", "hiking", "coding"]
  };

// 1)

  const jsonString = JSON.stringify(jsonObject);
  console.log("Converting JSON to String.....");
  console.log(jsonString);
  
  //  2)
  
  const jsonParse = JSON.parse(jsonString)
  console.log("Converting JSONStringify to JSONObject.....");
  console.log(jsonParse);
  