const readlineSync = require("readline-sync");

let card = 0;
let v = 0;
let x1 = 0;
let addition = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let x6 = 0;
let digit_number = 0;

console.log()

do {
    card = Number(readlineSync.question("Number: "))
} while (card < 100000000000 || card > 9999999999999999 || Number.isNaN(card) || !Number.isInteger(card))

let card2 = card;
let card3 = card;

while (card2 > 0) {
       v = Math.floor((card2 % 100) / 10);
       card2 = Math.floor(card2 / 100);
       x4 = v * 2;
       digit_number++
       if (x4 < 10) {
         addition = addition + x4
       }

       if (x4 >= 10) {
         x1 = x4 / 10;
         x2 = Math.floor(x1);
         x3 = x4 % 10;
         addition = addition + x2 + x3;
       }
    }

while (card3 > 0) {
    if (card3 === card) {
      x5 = (card3 % 10);
      card3 = Math.floor((card3 / 10));
      addition = addition + x5
      continue;
    }

    if (card3 !== card) {
      x6 = Math.floor((card3 % 100) / 10);
      card3 = Math.floor((card3 / 100))
      addition = addition + x6
      digit_number++
    }
}

if (addition % 10 !== 0) {
    console.log("\nInvalid.\n")
}

while (card > 0) {
    if (digit_number === 15 && (Math.floor(card / (Math.pow(10, (digit_number - 2))))) === 34 || (Math.floor(card / (Math.pow(10, (digit_number - 2))))) === 37) {
      console.log("\nAmex.\n")
      break;
    }

    if ((digit_number === 16) && (Math.floor(card / (Math.pow(10, (digit_number - 2))))) === 51 || (Math.floor(card / (Math.pow(10, (digit_number - 2))))) === 52 || (Math.floor(card / (Math.pow(10, (digit_number - 2))))) === 53 || (Math.floor(card / (Math.pow(10, (digit_number - 2))))) === 54 || (Math.floor(card / (Math.pow(10, (digit_number - 2))))) === 55) {
      console.log("\nMastercard.\n")
      break;
    }

    if ((Math.floor(card / (Math.pow(10, (digit_number - 1))))) === 4 && (digit_number === 13 || digit_number === 16)) {
      console.log("\nVisa.\n")
      break;
    }

    if (digit_number === 15 || digit_number === 16 || digit_number === 13 || card / (Math.pow(10, (digit_number - 1)) === 4 || card / (Math.pow(10, (digit_number - 2)) === 51 || card / (Math.pow(10, (digit_number - 2))) === 52 || card / (Math.pow(10, (digit_number - 2))) === 53 || card / (Math.pow(10, (digit_number - 2))) === 54 || card / (Math.pow(10, (digit_number - 2))) === 55) || card / (Math.pow(10, (digit_number - 2)) === 34 || card / (Math.pow(10, (digit_number - 2))) === 37))) {
      console.log("\nInvalid.\n")
      break;
    }
}
