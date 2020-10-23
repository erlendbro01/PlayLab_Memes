

function loadImage () {

  alert ("Image Loader Started");
}

    



function getRandomTerm() {
  var randomIndex = Math.floor(Math.random() * chatbot.db.length);
  currentItem = chatbot.db[randomIndex]
  return currentItem.term;
}