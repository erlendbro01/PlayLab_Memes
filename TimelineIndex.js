window.onload = start();

function start() {
  spawnImages();
}

function spawnImages() {
  var v = JSON.parse(localStorage.getItem("my_colors"));
  alert(v[0]);
  for (let index = 0; index < v.length; index++) {
    myFunction(v[index]);
  }
}

function myFunction(url) {
  var x = document.createElement("IMG");
  x.setAttribute("src", url);
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}
