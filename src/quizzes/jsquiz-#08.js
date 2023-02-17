// JsQuiz#08

let a = [1, 2, 3];

let b = [...a];

let c = a;

a.pop();

console.log(b === a && c === a);
