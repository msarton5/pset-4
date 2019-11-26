const readlineSync = require("readline-Sync")

let a = 0
let space = ""
let output = 0

console.log()

do {
    a = Number(readlineSync.question("Positive integer: "));
} while (a < 1 || a > Number.MAX_SAFE_INTEGER || !Number.isInteger(a));

while (a > 0) {
  let value = (a % 10)
  a = Math.floor(a/10)

  if (value % 2 === 1) {
    output = output + value;
  } else if (value % 2 === 0){
    continue;
  } else {
    continue;
  }

}

console.log("\n" + output + ".\n");
