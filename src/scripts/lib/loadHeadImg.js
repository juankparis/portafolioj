var loadHeadImg = function (url) {
  var elem = document.createElement('link');
  elem.rel = 'shortcut icon';
  elem.href = url;
  document.head.appendChild(elem);
}

module.exports = loadHeadImg;