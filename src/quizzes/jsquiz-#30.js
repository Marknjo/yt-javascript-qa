// JsQuiz#30

setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

console.log("C");

setTimeout(() => console.log("D"), 1000);
