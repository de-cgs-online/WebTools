var links = document.getElementsByTagName("a");
for (var i=0; i<links.length; i++) {
  var link = links[i].attributes["href"].value;
  if (link.match(/^\/.*\/prototyp\.js$/)) {
    alert(link);
	break;
  }
}
