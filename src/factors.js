const readlineSync = require("readline-sync");

console.log();

MIN = 1;
MAX = Number.MAX_SAFE_INTEGER;

nni = -1;
output = "";

while (nni < 1 || nni > Number.MAX_SAFE_INTEGER) {
      nni = Number(readlineSync.question("Positive integer: "));
}

for (let i = 0; i <= Math.sqrt(nni); i++) {
    if (nni % i == 0) {
      output += i + ", ";
      if (i != (nni / i)) {
        output += (nni / i) + ", ";
      }

    }
}

output = output.substring(0, output.length - 2) + ".";
console.log(output);
