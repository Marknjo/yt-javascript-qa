// JsQuiz#26

class Dog {
  #name = " Cooper";

  setName(name) {
    this.#name = name;
  }
}

const dog = new Dog();
console.log(dog.#name);
