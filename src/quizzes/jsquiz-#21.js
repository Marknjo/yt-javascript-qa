// JsQuiz#21

let a = 10;
let b = () => {
   console.log(a);
};

let c = () => {
    let a = 20;
    b();
};

c();

