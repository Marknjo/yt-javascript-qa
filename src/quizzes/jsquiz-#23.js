// JsQuiz#23

function greet(name) {
  console.log("Hello " + name);
}

let person = {
  name: "John",
  greet: greet,
};

person.greet("Jane");
