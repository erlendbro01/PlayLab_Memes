//
function generateTimeline(chatLog) {
  localStorage.setItem("my_colors", JSON.stringify(chatLog)); //store colors

  //addPicsToPage(chatLog);

  localStorage.setItem("text", "this is working");
  var opened = window.open("ChatLog.html");
}
