const readlineSync = require("readline-Sync")

let a = 0
let x = ""

console.log()

MIN = 1
MAX = Number.MAX_SAFE_INTEGER

while (a < 1 || a > Number.MAX_SAFE_INTEGER || !Number.isInteger(a)) {
  a = Number(readlineSync.question("Positive integer: "));
}

while (a > 0) {
  let value = (a % 10)
  a = Math.floor(a/10)

  if (a > 0) {
    x = x + value + ", ";
  } else {
    x = x + value + ". ";
  }
}

console.log();
console.log(x);
console.log();
