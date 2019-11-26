const readlineSync = require("readline-sync");

console.log()

MIN = 1
MAX = 24

height = 0;

while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height)) {
  height = Number(readlineSync.question("Height: "));
}

let output = "";
console.log();
for (let i = 0; i < height; i++) {
  for (let j = 0; j < height - 1 - i; j++) {
    output += " ";
  }
  for (let k = 0; k < i + 2; k++) {
      output += "#";
  }
  output += "  ";
  for (let k = 0; k < i + 2; k++) {
      output += "#";
  }
  output += "\n";
}
console.log(output);
