if (location.hash && location.hash.length > 1) {
  function getLocationHashContents() {
    return location.hash.substr(1);
  }
  function getPrefixPath(url) {
    return (url.match(/^.*\//) || [""])[0];
  }
  function loadJavaScript(url, charset, onloadFunc) {
    var extScript = document.createElement("script");
    extScript.type = "text/javascript";
    extScript.charset = charset || "utf-8";
    if (onloadFunc) {
      extScript.onload = onloadFunc;
    }
    extScript.src = url;
    document.body.appendChild(extScript);
  }
  function loadRelativeJavaScript(name, charset, onloadFunc) {
    loadJavaScript(getPrefixPath(getLocationHashContents()) + name, charset, onloadFunc);
  }
  loadJavaScript(getLocationHashContents());
}
