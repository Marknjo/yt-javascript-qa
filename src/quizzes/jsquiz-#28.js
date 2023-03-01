// JsQuiz#28

function Foo() {}

Foo.prototype.bar = function () {
  console.log("Hello, World!");
};

const foo = new Foo();

foo.bar();
