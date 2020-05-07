var links = document.getElementsByTagName("a");
for (var i=0; i<links.length; i++) {
  var link = links[i].attributes["href"].value;
  if (link.match(/^\/.*\/prototyp\.js$/)) {
    location.href = "#" + link;
    break;
  }
}
document.body.innerHTML = "";
var s = document.createElement("script");
s.src = "https://de-cgs-online.github.io/WebTools/stub.js";
document.body.appendChild(s);
