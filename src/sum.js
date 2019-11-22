const readlineSync = require("readline-sync");

MIN = Number.MIN_SAFE_INTEGER
MAX = Number.MAX_SAFE_INTEGER

let Lower = Number(readlineSync.question("\nLower bound: "));
let Upper = Number(readlineSync.question("Upper bound: "));

let Answer = 0

while (Lower > Upper) {
    Lower = Number(readlineSync.question("Lower bound: "));
    Upper = Number(readlineSync.question("Upper bound: "));
}

if (Lower % 2 == 0) {
    for (let a = Lower ; a <= Upper ; a += 2) {
        Answer = a + Answer
    }
    console.log("\n" + Answer.toLocaleString("en") + ".\n")
} else {
    for(let a = Lower + 1 ; a <= Upper ; a += 2) {
        Answer = a + Answer
    }
    console.log("\n" + Answer.toLocaleString("en") + ".\n")
}
