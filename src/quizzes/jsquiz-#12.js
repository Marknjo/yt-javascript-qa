// JsQuiz#12

let x = 0;
let y = 0;

const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };
const c = a;

if (a === c) x++;
if (a == b) y++;

console.log(x, y);
