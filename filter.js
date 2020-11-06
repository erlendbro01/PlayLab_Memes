// public filter variables
let output = "Final Output";
let tags = ["no", "happy", "angry", "pepe"];

var variations = 10;
const maxLenght = 20;
const minLenght = 3;

function filterInput(input) {
  output = input;
  //return input;

  if (output.length < minLenght) {
    return "To short";
  }

  if (output.includes("how" || "you")) {
    variations = 3;
    return "I don't know"; //example: Do you know how to do that?
  }

  var msg = input.replace("yes", tags[0]); // replace a specific word
  return msg;
  //return tags[getRandomInt(0, tags.length - 1)]; // pick a specific or random word from tags array
}
