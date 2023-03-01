// JsQuiz#34

const arrayOfFunctions = [];

for (var i = 0; i < 5; i++) {
  arrayOfFunctions[i] = function () {
    console.log(i);
  };
}

arrayOfFunctions[0]();
