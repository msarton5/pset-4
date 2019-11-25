const readlineSync = require("readline-sync");

console.log()

MIN = 0
MAX = Number.MAX_SAFE_INTEGER

nni = -1
check = 0

while (nni < 0 || nni > Number.MAX_SAFE_INTEGER) {
      nni = Number(readlineSync.question("Non-negative integer: "));
}

for (i = 2; i <= Math.sqrt(nni); i++) {
  if ((nni / i % 1 == 0 && check == 0)) {
    console.log("\nNot Prime.\n")
    ++check
  }
}

if (check == 0) {
  console.log("\nPrime.\n")
}
