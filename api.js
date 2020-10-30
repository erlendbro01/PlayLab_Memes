// When search button is clicked
// initialize array
var chatLog = [];

function spawnMeme() {
  // search text
  tag = document.getElementById("searchInput").value;
  document.getElementById("voice_input").innerHTML = "input: " + tag;
  getAPI(tag).then((data) => generateElement(data, tag));
  console.log(arr);
}

// runs from sketch.js
function spawnMemeAuto(tag) {
  getAPI(tag).then((data) => generateElement(data, tag));
}

function generateElement(img, tag) {
  // Create div
  var div = document.createElement("div");
  div.setAttribute("class", "meme");

  // create text
  var h = document.createElement("H3");
  var t = document.createTextNode(tag);
  h.appendChild(t);

  // display
  div.appendChild(img);
  div.appendChild(h);
  document.getElementById("log").prepend(div);
}

// Gets Json from api call and returns an img element from url
async function getAPI(tag) {
  let apiUrl =
    "//api.giphy.com/v1/gifs/search?api_key=AlTeXUdZH7iTL5hiHLBUHXeTdBXSL0m6&q=" +
    tag +
    "&limit=30&offset=0&rating=g&lang=en";

  let response = await fetch(apiUrl);
  let data = await response.json();

  // Filter out url link
  const url = data.data[getRandomInt(0, 20)].images.original.url;
  var img = createImageElement(url);
  // adds element to list
  chatLog.push(url);

  return img;
}

// Generate an image element //
function createImageElement(url) {
  var x = document.createElement("IMG");
  x.setAttribute("src", url);
  x.setAttribute("alt", "Broken Link" + url);
  x.setAttribute("class", "meme");
  x.setAttribute("id", "imgID");
  return x;
}

// Random Int //
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
