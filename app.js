// Var is scoped to functions
// Let & Const are scoped to blocks {}
const cat = 'cat'; // global

function test(){
  var a = "apple"; // local
}

// {
//   var a = "apple"; // global
// }

const dog =  'dog'; // global

console.log(a);














let time = 30;
let timer;

function startGame() {
  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    time--;
  }, 1000);

  if (time <= 0) {
    clearInterval(timer);
  }
}

function endGame() {
  clearInterval(timer);
}