const readlineSync = require("readline-sync");

console.log()

MIN = 1
MAX = 24

height = 1

while (height <= 1 || height >= 24 || Number.isNaN(height)) {
    height = Number(readlineSync.question("Height: "));

  if (height == 1) {
    console.log("\n##")
  } else if (height == 2) {
    console.log("\n###")
  } else if (height == 3) {
    console.log("\n####")
  } else if (height == 4) {
    console.log("\n#####")
  } else if (height == 5) {
    console.log("\n######")
  } else if (height == 6) {
    console.log("\n#######")
  } else if (height == 7) {
    console.log("\n########")
  } else if (height == 8) {
    console.log("\n#########")
  } else if (height == 9) {
    console.log("\n##########")
  } else if (height == 10) {
    console.log("\n###########")
  } else if (height == 11) {
    console.log("\n############")
  } else if (height == 12) {
    console.log("\n#############")
  } else if (height == 13) {
    console.log("\n##############")
  } else if (height == 14) {
    console.log("\n###############")
  } else if (height == 15) {
    console.log("\n################")
  } else if (height == 16) {
    console.log("\n#################")
  } else if (height == 17) {
    console.log("\n##################")
  } else if (height == 18) {
    console.log("\n###################")
  } else if (height == 19) {
    console.log("\n####################")
  } else if (height == 20) {
    console.log("\n#####################")
  } else if (height == 21) {
    console.log("\n######################")
  } else if (height == 22) {
    console.log("\n#######################")
  } else if (height == 23) {
    console.log("\n########################")
  } else if (height == 24) {
    console.log("\n#########################")
  } else {
    height = Number(readlineSync.question("Height: "));
  }
}
