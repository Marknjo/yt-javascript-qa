// JsQuiz#31

function createIncrementer() {
  let i = 0;

  function increment() {
    i++;
    return i;
  }

  return increment;
}

const inc = createIncrementer();

console.log(inc());
console.log(inc());
console.log(inc());
