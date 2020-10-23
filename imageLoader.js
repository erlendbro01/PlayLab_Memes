// Runs when submit button is pressed
function submitButton() {
  category = document.getElementById("user_input").value;

  if (category == "") alert("Enter an emotion (sad/happy");
  else spawnImage(category, getRandomInt(0, 3), "imgPos");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Spawn image from path and add to page
function spawnImage(category, number, id) {
  // Delete old image
  if (document.getElementById("imgPos").childElementCount == 0) {
  } else clearImages();

  var x = document.createElement("IMG");
  x.setAttribute("src", "img/" + category + "/" + number + ".jpg");
  x.setAttribute("alt", category);
  x.setAttribute("class", "meme");
  document.getElementById(id).appendChild(x);
}

function clearImages() {
  var list = document.getElementById("imgPos");
  list.removeChild(list.childNodes[0]);

  var list = document.getElementById("output");
  list.removeChild(list.childNodes[0]);
}
