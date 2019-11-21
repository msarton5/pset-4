const readlineSync = require("readline-sync");

var Value = null
var Fibonacci_1 = 0;
var Fibonacci_2 = 1;
var Fibonacci_A = 0;

while (Value < 1 || Value % 1 != 0 || Value > 78) {
  var Value = Number (readlineSync.question("\nPositive integer: "))
}

for (loop = 1; loop < Value; loop++) {
  var Fibonacci_A = Fibonacci_1 + Fibonacci_2;
  var Fibonacci_1 = Fibonacci_2
  var Fibonacci_2 = Fibonacci_A
}

console.log("\n" + Fibonacci_2.toLocaleString("en") + ".\n")
