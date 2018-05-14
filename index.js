function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`.target`);
}

function deepestChild() {
  var lis = document.getElementById("grand-node").querySelector("div");
  var test;
  for (var i = 0; i < lis.length-1; )
}