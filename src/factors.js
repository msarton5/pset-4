const readlineSync = require("readline-sync");

console.log()

MIN = 1
MAX = Number.MAX_SAFE_INTEGER

nni = -1
string = 0

while (nni < 1 || nni > Number.MAX_SAFE_INTEGER) {
      nni = Number(readlineSync.question("Positive integer: "));
}

for (i = 0; i <= Math.sqrt(nni); i++) {
  if ((nni / i % 1 == 0)) {
    string = String(i) + "," + String(nni/i)
    if (i < Math.sqrt(nni)) {
      string = String(i) + ","
    } else {
       string = string + "."
    }
  }
}

console.log(string)
