// Runs when submit button is pressed
function submitButton() {
  category = document.getElementById("user_input").value;

  // if (category == "") alert("Enter an emotion (sad/happy");
  // Spawn Image ("emote", 0-max, "position")
  // else spawnImage(category, getRandomInt(0, 3), "imgPos");
  userAction(category);
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

  var list2 = document.getElementById("output");
  list.removeChild(list2.childNodes[0]);
}

const userAction = async (searchTag) => {
  let tag = searchTag;
  let apiUrl =
    "//api.giphy.com/v1/gifs/search?api_key=AlTeXUdZH7iTL5hiHLBUHXeTdBXSL0m6&q=" +
    tag +
    "&limit=10&offset=0&rating=g&lang=en";
  const response = await fetch(apiUrl);
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson

  // get a random url relevant to category
  const gifUrl = myJson.data[getRandomInt(0, 10)].images.original.url;

  spawnGif(gifUrl);
};

// Spawn image from api
function spawnGif(url) {
  var x = document.createElement("IMG");
  x.setAttribute("src", url);
  x.setAttribute("alt", category);
  x.setAttribute("class", "meme");
  document.getElementById("imgPos").appendChild(x);

  if (document.getElementById("imgPos").childElementCount > 1) {
    var list = document.getElementById("imgPos");
    list.removeChild(list.childNodes[0]);
  }
}
