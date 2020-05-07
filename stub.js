var links = document.getElementsByTagName("a");
for (var i=0; i<links.length; i++) {
  var link = links[i].attributes["href"].value;
  if (link.match(/^\/.*\/prototyp\.js$/)) {
    location.href = "#" + link;
    break;
  }
}

document.body.innerHTML = "  <script type=\"text/javascript\">\n" +
  "    if (location.hash && location.hash.length > 1) {\n" +
  "      function getLocationHashContents() {\n" +
  "        return location.hash.substr(1);\n" +
  "      }\n" +
  "      function getPrefixPath(url) {\n" +
  "        return (url.match(/^.*\//) || [\"\"])[0];\n" +
  "      }\n" +
  "      function loadJavaScript(url, charset, onloadFunc) {\n" +
  "        var extScript = document.createElement(\"script\");\n" +
  "        extScript.type = \"text/javascript\";\n" +
  "        extScript.charset = charset || \"utf-8\";\n" +
  "        if (onloadFunc) {\n" +
  "          extScript.onload = onloadFunc;\n" +
  "        }\n" +
  "        extScript.src = url;\n" +
  "        document.body.appendChild(extScript);\n" +
  "      }\n" +
  "      function loadRelativeJavaScript(name, charset, onloadFunc) {\n" +
  "        loadJavaScript(getPrefixPath(getLocationHashContents()) + name, charset, onloadFunc);\n" +
  "      }\n" +
  "      loadJavaScript(getLocationHashContents());\n" +
  "    }\n" +
  "  </script>\n";
