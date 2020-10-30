/*// When search button is clicked
function searchButton() {
  category = document.getElementById("searchInput").value;
  fetchImage(category);
}

const fetchImage = async (searchTag) => {
  let tag = searchTag;
  let apiUrl =
    "//api.giphy.com/v1/gifs/search?api_key=AlTeXUdZH7iTL5hiHLBUHXeTdBXSL0m6&q=" +
    tag +
    "&limit=10&offset=0&rating=g&lang=en";
  const response = await fetch(apiUrl);
  const myJson = await response.json();

  // get a random url relevant to category
  const gifUrl = myJson.data[getRandomInt(0, 4)].images.original.url;
  imageURL(gifUrl);
};

const getTodo = () => {
  return new Promise((resolve, reject) => {
    let error = true;
    if (!error) {
      resolve({ text: "yrrrrr" });
    } else reject();
  });
};

async function fetchTodo() {
  try {
    const todo = await getTodo();
    return todo;
  } catch (error) {
    console.log("Error occurred");
  }
}

function clearImages() {
  //var x = fetchImage("sad");

  fetchTodo()
    .then((todo) => console.log(todo.text))
    .catch(() => console.log("Error occurred"));

  /*
  // Create div
  var div = document.createElement("div");
  div.setAttribute("class", "logElement");

  // create text
  var h = document.createElement("H3");
  var t = document.createTextNode("text");
  h.appendChild(t);

  // create image
  category = document.getElementById("searchInput").value;
  var url = fetchImage(category);
  var img = createImageElement(url);

  // display
  div.appendChild(img);
  div.appendChild(h);
  document.getElementById("log").appendChild(div);*/
/*}

//////////////////////////////////////////////////////////////////

// Random Int //
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an image element
function createImageElement(url) {
  let hi = url;
  alert(hi);
  var x = document.createElement("IMG");
  x.setAttribute("src", url);
  x.setAttribute("alt", "Broken Link");
  x.setAttribute("class", "meme");
  x.setAttribute("id", "imgID");
  return x;
}









async function getImage () {

}*/
