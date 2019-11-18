const readlineSync = require("readline-sync");

MIN = Number.MIN_SAFE_INTEGER
MAX = Number.MAX_SAFE_INTEGER

let Lower = readlineSync.question("\nLower bound: ")
let Upper = readlineSync.question("Upper bound: ")

let Answer = 0

while (Lower > Upper) {
    Lower = readlineSync.question("Lower bound: ")
    Upper = readlineSync.question("Upper bound: ")
} if (Lower % 2 == 0) {
    for(a = Lower ; a <= Upper ; a += 2) {
        Answer = a + Answer
    }
} else {
    for(a = Lower + 1 ; a <= Upper ; a += 2) {
        Answer = a + Answer
    }
}

console.log("\n" + Answer + ".\n")
