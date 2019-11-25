const readlineSync = require("readline-sync");

console.log()

MIN = 1
MAX = 24

height = 0;

while (height < 1 || height > 24 || Number.isNaN(height)) {
  height = Number(readlineSync.question("Height: "));
}

for (let i = 0; i < height; i++) {
  for (let j = 0; j < height - 1 - i; j++) {
    console.log(" ");
  }
  for (let k = 0; k < i + 2; k++) {
      console.log("#");
  }
  console.log()
}
